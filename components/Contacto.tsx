'use client';

import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, CheckCircle2 } from 'lucide-react';

const schema = z.object({
  nombre:   z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  apellido: z.string().min(2, 'El apellido debe tener al menos 2 caracteres'),
  correo:   z.string().email('Ingresá un correo válido'),
  telefono: z.string().min(8, 'Ingresá un teléfono válido'),
  mensaje:  z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});
type FormData = z.infer<typeof schema>;

function Field({
  label, error, children,
}: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">{label} *</label>
      {children}
      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  );
}

const inputCls = (hasError: boolean) =>
  `w-full px-4 py-3 rounded-xl border text-sm font-medium text-gray-900 placeholder:text-gray-400 outline-none transition-all ${
    hasError
      ? 'border-red-400 bg-red-50 focus:ring-2 focus:ring-red-200'
      : 'border-gray-200 bg-gray-50 focus:border-red-400 focus:ring-2 focus:ring-red-100 focus:bg-white'
  }`;

export default function Contacto() {
  const { ref, isVisible } = useScrollAnimation();
  const [sent, setSent] = useState(false);

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } =
    useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 1200));
    console.log('Form data:', data);
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contacto" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div ref={ref as React.RefObject<HTMLDivElement>} className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 text-red-600 font-bold text-xs tracking-widest uppercase mb-4 anim-fade-up ${isVisible ? 'is-visible' : ''}`}>
            <span className="w-8 h-0.5 bg-red-600 rounded-full" />
            Escribinos
            <span className="w-8 h-0.5 bg-red-600 rounded-full" />
          </div>
          <h2 className={`text-4xl md:text-5xl font-black text-gray-900 tracking-tight anim-fade-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '80ms' }}>
            ¿Tenés alguna <span className="text-red-600">consulta?</span>
          </h2>
          <p className={`text-gray-500 text-lg mt-4 anim-fade-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '160ms' }}>
            Completá el formulario y te respondemos a la brevedad.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className={`bg-white rounded-2xl shadow-xl shadow-gray-100 border border-gray-100 p-8 md:p-10 anim-fade-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '280ms' }}>
            {sent ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">¡Mensaje enviado!</h3>
                <p className="text-gray-500">Te vamos a responder a la brevedad. ¡Gracias por escribirnos!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Nombre" error={errors.nombre?.message}>
                    <input {...register('nombre')} placeholder="Tu nombre" className={inputCls(!!errors.nombre)} />
                  </Field>
                  <Field label="Apellido" error={errors.apellido?.message}>
                    <input {...register('apellido')} placeholder="Tu apellido" className={inputCls(!!errors.apellido)} />
                  </Field>
                </div>
                <Field label="Correo electrónico" error={errors.correo?.message}>
                  <input {...register('correo')} type="email" placeholder="tu@correo.com" className={inputCls(!!errors.correo)} />
                </Field>
                <Field label="Teléfono" error={errors.telefono?.message}>
                  <input {...register('telefono')} type="tel" placeholder="+54 9 351 000-0000" className={inputCls(!!errors.telefono)} />
                </Field>
                <Field label="Mensaje" error={errors.mensaje?.message}>
                  <textarea
                    {...register('mensaje')}
                    rows={4}
                    placeholder="Contanos en qué podemos ayudarte..."
                    className={`${inputCls(!!errors.mensaje)} resize-none`}
                  />
                </Field>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-colors text-sm active:bg-red-800"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Enviar consulta
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
