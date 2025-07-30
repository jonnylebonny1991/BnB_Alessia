import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function BnBSite() {
  const [date, setDate] = useState(new Date());

  const cameraImages = [
    "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1618220212170-9e55f8f5c77d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1616628182505-b2b144fed6f6?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <div className="p-6 space-y-10 bg-gradient-to-b from-sky-100 to-blue-200 font-serif">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-blue-900">B&B Il Sogno del Mare</h1>
        <p className="text-lg text-blue-800 italic">
          Rilassati in una delle nostre camere sul mare a Follonica
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cameraImages.map((img, i) => (
          <Card key={i} className="rounded-2xl shadow-md bg-white/90">
            <img
              src={img}
              alt={`Camera ${i + 1}`}
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <CardContent className="p-4 space-y-2">
              <h2 className="text-xl font-semibold text-blue-900">Camera {i + 1}</h2>
              <p className="text-gray-700">
                Camera in stile antico ed elegante con bagno privato, Wi-Fi gratuito,
                aria condizionata e colazione inclusa.
              </p>
              <p className="text-sm text-gray-500">Prezzo: da 90€/notte</p>
              <Button className="bg-blue-700 text-white hover:bg-blue-800">Prenota</Button>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="max-w-md mx-auto mt-10">
        <h3 className="text-2xl font-bold mb-4 text-center text-blue-900">
          Controlla disponibilità
        </h3>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border border-blue-300 bg-white"
        />
      </section>

      <footer className="text-center mt-10 text-blue-800">
        <p>B&B Il Sogno del Mare - Via Bicocchi 60, Follonica (GR)</p>
        <p>Email: info@ilsognodelmare.it - Tel: +39 333 1234567</p>
      </footer>
    </div>
  );
}