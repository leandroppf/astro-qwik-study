import { component$ } from "@builder.io/qwik";

interface QCardProps {
  body: string;
  href: string;
  title: string;
}

const QCard = component$<QCardProps>(({ body, href, title }) => {
  return (
    <li class="list-none flex p-px bg-slate-700 rounded-lg shadow-sm hover:bg-gradient-to-r hover:from-purple-800 hover:to-purple-400 transition-all duration-500">
      <a href={href} class="w-full p-6 rounded-lg text-white opacity-80">
        <h2 class="m-0 text-xl">
          {title}
          <span>&rarr;</span>
        </h2>
        <p class="mt-2 mb-0">{body}</p>
      </a>
    </li>
  );
});

export default QCard;
