import type { MetaFunction } from "@remix-run/node";
import { Form, redirect } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function action() {
  return redirect("/dashboard");
}

export default function Index() {
  return (
    <div className="h-screen bg-gray-200">
      <div className="flex items-center justify-center flex-col p-6">
        <img
          className="rounded-full mb-6"
          src="/logo.png"
          alt="Logo"
          width={200}
        />

        <h1 className="place-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          FreeJá
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Ajudando a conectar pequenas empresas com grandes profissionais
        </p>
      </div>
      <Form method="post">
        <div className="flex items-center flex-col gap-4 mx-6 mb-6">
          <Input
            placeholder="Entre com o e-mail ou telefone"
            type="text"
            name="email"
          />
          <Input placeholder="Senha" type="password" name="password" />
          <div className="flex items-center">
            <RadioGroup defaultValue="default">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" id="r1" />
                <Label htmlFor="r1">Empresa</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="comfortable" id="r2" />
                <Label htmlFor="r2">Usuário</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="px-6 sm:px-0 max-w-sm">
            <Button className="w-full mb-4" type="submit">
              Entrar
            </Button>

            <button
              type="button"
              className="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mr-2 mb-2"
            >
              <svg
                className="mr-2 -ml-1 w-4 h-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                ></path>
              </svg>
              Conectar com Google<div></div>
            </button>

            <button
              type="button"
              className="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mr-2 mb-2"
            >
              <svg
                className="mr-2 -ml-1 w-4 h-4"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
              </svg>
              Conectar com Facebook<div></div>
            </button>
          </div>
          <p>
            Ainda não tem uma conta?{" "}
            <Button variant={"link"}>Registrar-se</Button>
          </p>
        </div>
      </Form>
    </div>
  );
}
