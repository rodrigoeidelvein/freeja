import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

const newJobs = [
  {
    titulo: "Motorista Particular",
    descricao:
      "Procuramos motorista com CNH categoria B para transporte de executivos em São Paulo. O profissional deve conhecer bem a cidade e ter disponibilidade para trabalhar durante a semana. Experiência anterior com direção executiva é um diferencial.",
    valor: 2000,
  },
  {
    titulo: "Garçom para Evento",
    descricao:
      "Buscamos garçom para servir em um evento corporativo de 200 convidados. O trabalho inclui montagem de mesas, serviço de bebidas e recolhimento de louças. Duração do evento: 6 horas. Uniforme será fornecido no local.",
    valor: 400,
  },
  {
    titulo: "Segurança para Festa",
    descricao:
      "Precisamos de segurança para festa privada de 100 pessoas em um salão de eventos. O profissional será responsável por controlar o acesso dos convidados e garantir a segurança durante a noite. Duração: 8 horas.",
    valor: 500,
  },
  {
    titulo: "Pintura de Parede",
    descricao:
      "Estamos buscando pintor para renovar a pintura de um apartamento de 80m². O trabalho inclui preparar as paredes, aplicar massa corrida, e pintar com tinta de acabamento fosco. Estimativa de 3 dias de trabalho.",
    valor: 1200,
  },
  {
    titulo: "Entregador com Moto",
    descricao:
      "Precisa-se de entregador com moto para realizar entregas de pequenos pacotes em São Paulo. Trabalho temporário por 5 dias, com rotas pré-definidas e horários flexíveis. Necessário ter moto própria.",
    valor: 800,
  },
  {
    titulo: "Auxiliar de Mudança",
    descricao:
      "Contratamos ajudante para auxiliar em mudanças residenciais. O trabalho envolve carregar móveis e caixas, desmontar e montar móveis simples. Duração do trabalho: 1 dia, para mudança em São Paulo.",
    valor: 300,
  },
  {
    titulo: "Serviço de Limpeza Residencial",
    descricao:
      "Precisamos de pessoa para realizar limpeza completa de um apartamento de 3 quartos. A limpeza inclui vidros, chão, banheiros e cozinha. Estimativa de 6 horas de trabalho.",
    valor: 200,
  },
];

const pastJobs = [
  {
    titulo: "Montagem de Móveis Simples",
    descricao:
      "Procuramos alguém para montar móveis simples (estante e rack) para uma sala de estar. Ferramentas necessárias serão fornecidas no local. Estimativa de 4 horas de trabalho.",
    valor: 150,
  },
  {
    titulo: "Carregar Caixas para Evento",
    descricao:
      "Precisamos de pessoa para ajudar a carregar caixas e montar estandes para um evento em um centro de convenções. Duração: 8 horas de trabalho, com intervalo para almoço.",
    valor: 250,
  },
  {
    titulo: "Manutenção de Jardim",
    descricao:
      "Procuramos jardineiro para cortar grama e podar árvores em um jardim de 200m². O trabalho deve ser concluído em um único dia. Experiência anterior não é necessária, mas será um diferencial.",
    valor: 350,
  },
];

function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export default function Dashboard() {
  return (
    <div className="h-full bg-gray-200 p-6">
      <div className="flex gap-6">
        <Avatar>
          <AvatarImage
            src="https://avatar.iran.liara.run/public"
            alt="@shadcn"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1 className="text-2xl font-bold mt-2">Seja bem vindo, João</h1>
      </div>

      <div>
        <h2 className="text-xl font-bold mt-6">Seus últimos freelas</h2>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {pastJobs.map((job, index) => (
            <div className="bg-white p-4 rounded-lg shadow-md" key={index}>
              <h3 className="text-md font-semibold">{job.titulo}</h3>
              <p className="text-sm text-gray-500">
                Remuneração: {formatCurrency(job.valor)}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mt-6">Freelas disponíveis</h2>
        <div className="grid grid-cols-1 gap-4 mt-4">
          {newJobs.map((job, index) => (
            <div className="bg-white p-4 rounded-lg shadow-md" key={index}>
              <h3 className="text-lg font-semibold">{job.titulo}</h3>
              <p className="text-sm text-gray-500">{job.descricao}</p>
              <p className="text-sm text-gray-500">
                Remuneração: {formatCurrency(job.valor)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
