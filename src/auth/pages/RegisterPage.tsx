import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, EyeOff, UserPlus } from 'lucide-react';
import { Link } from 'react-router';

type FormValues = {
  fullname: string;
  email: string;
  password: string;
};

const defaultValues: FormValues = {
  fullname: '',
  email: '',
  password: '',
};

const RegisterPage: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ defaultValues });

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);

    // Aquí iría la lógica para enviar los datos al servidor
    console.log('Datos del formulario:', data);

    // Simulación de envío
    setTimeout(() => {
      setIsLoading(false);
      // Aquí podrías redirigir al usuario o mostrar un mensaje de éxito
    }, 1500);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full max-w-4xl mx-auto">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl text-center ">Crea tu cuenta</CardTitle>
          <p className="text-base text-gray-500">Regístrate para acceder a todas las funcionalidades.</p>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullname">Nombre completo</Label>
              <Input
                id="fullname"
                {...register('fullname', {
                  required: 'El nombre completo es requerido',
                  minLength: {
                    value: 3,
                    message: 'El nombre debe tener al menos 3 caracteres',
                  },
                })}
                placeholder="Ingresa tu nombre completo"
                aria-invalid={errors.fullname ? 'true' : 'false'}
              />
              {errors.fullname && <p className="text-sm text-red-500 mt-1">{errors.fullname.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                id="email"
                type="email"
                {...register('email', {
                  required: 'El correo electrónico es requerido',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Dirección de correo electrónico inválida',
                  },
                })}
                placeholder="correo@ejemplo.com"
                aria-invalid={errors.email ? 'true' : 'false'}
              />
              {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  {...register('password', {
                    required: 'La contraseña es requerida',
                    minLength: {
                      value: 6,
                      message: 'La contraseña debe tener al menos 6 caracteres',
                    },
                  })}
                  placeholder="Ingresa tu contraseña"
                  className="pr-10"
                  aria-invalid={errors.password ? 'true' : 'false'}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>}
            </div>
          </CardContent>

          <CardFooter>
            <Button type="submit" className="w-full mt-8" disabled={isLoading}>
              {isLoading ? 'Procesando...' : 'Registrarse'}
            </Button>
          </CardFooter>
        </form>

        <div className="text-center pb-6">
          <p className="text-sm text-gray-500">
            ¿Ya tienes una cuenta?{' '}
            <Link to="/auth" className="text-blue-600 hover:underline underline-offset-4">
              Iniciar sesión
            </Link>
          </p>
        </div>
      </Card>

      <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-6">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">¡Únete a nosotros!</h2>
          <p className="text-gray-600">
            Crea tu cuenta para acceder a todas las funcionalidades y beneficios de nuestra plataforma.
          </p>
          <div className="flex items-center justify-center space-x-2 text-blue-600">
            <UserPlus size={20} />
            <span className="font-medium">Registro rápido y seguro</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegisterPage;
