import Stripe from "stripe";
import { db } from "@/lib/firebase";
import { collection, query, where, getDocs, updateDoc, doc } from "firebase/firestore";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  const body = await request.text();
  const sig = request.headers.get("stripe-signature");

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (error) {
    console.log("Webhook error:", error.message);
    return Response.json({ error: error.message }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    try {
      // Find order by sessionId and update status to "paid"
      const q = query(
        collection(db, "orders"),
        where("sessionId", "==", session.id)
      );
      const snapshot = await getDocs(q);

      snapshot.forEach(async (docSnap) => {
        await updateDoc(doc(db, "orders", docSnap.id), {
          paymentStatus: "paid",
          paidAt: new Date(),
        });
        console.log("Order updated to paid:", docSnap.id);
      });
    } catch (error) {
      console.log("Error updating order:", error);
    }
  }

  return Response.json({ received: true });
}