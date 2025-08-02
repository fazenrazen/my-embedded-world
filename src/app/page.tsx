import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-4">Faizan Darsot</h1>
      <p className="text-xl text-center mb-6">
        Embedded Systems Engineer | IoT Prototyping | BLDC Motor Control
      </p>
      <div className="flex gap-4">
        <a href="https://calendly.com/faizandarsot/15min" className="bg-blue-500 text-white px-4 py-2 rounded-md">Schedule a Call</a>
        <a href="https://forms.gle/YOUR_GOOGLE_FORM_LINK" className="bg-gray-500 text-white px-4 py-2 rounded-md">Request a Quote</a>
      </div>
    </main>
  );
}
