// components/ContactForm.tsx
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });

  const [errors, setErrors] = useState<Error>({});

  type Error = {
    name?: string;
    email?: string;
    message?: string;
  };
  const validate = () => {
    const errs: Error = {};
    if (!form.name) errs.name = "Name is required";
    if (!form.email.includes("@")) errs.email = "Valid email required";
    if (!form.message) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted!");
      // Reset form or integrate with backend later
    }
  };

  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 dark:text-white">
        <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">
          Get In Touch
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid gap-4 bg-gray-100 p-6 rounded-2xl shadow-lg dark:bg-gray-700"
        >
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              className="w-full p-2 rounded border dark:bg-gray-500"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full p-2 rounded border dark:bg-gray-500"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">Company</label>
            <input
              type="text"
              className="w-full p-2 rounded border dark:bg-gray-500"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">License Type</label>
            <select
              className="w-full p-2 rounded border dark:bg-gray-500"
              value={form.licenseType}
              onChange={(e) =>
                setForm({ ...form, licenseType: e.target.value })
              }
            >
              <option value="">Select</option>
              <option value="Office 365">Office 365</option>
              <option value="Antivirus">Antivirus</option>
              <option value="Design Tools">Design Tools</option>
              <option value="Developer Tools">Developer Tools</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              className="w-full p-2 rounded border dark:bg-gray-500"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
