import Stripe from "stripe";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    const { cartItems, customerInfo } = await request.json();

    const lineItems = cartItems.map((item) => ({
      price_data: {
        currency: "lkr",
        product_data: { name: item.name },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cart",
    });

    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity, 0
    );

    await addDoc(collection(db, "orders"), {
      items: cartItems,
      amount: total,
      paymentStatus: "pending",
      sessionId: session.id,
      customerInfo: customerInfo || {},
      createdAt: new Date(),
    });

    return Response.json({ url: session.url });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}