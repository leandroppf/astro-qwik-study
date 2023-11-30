import { component$ } from "@builder.io/qwik";

interface QCardProps {
  body: string;
  href: string;
  title: string;
}

const QCard = component$<QCardProps>(({ body, href, title }) => {
  return (
    <div class="card bg-base-content hover:bg-gradient-to-r hover:from-purple-800 hover:to-purple-400 transition-all duration-500">
      <div class="card-body">
        <h2 class="card-title">{title}</h2>

        <p class="mb-4">{body}</p>

        <div class="card-actions justify-end">
          <a href={href} target="_blank" class="btn btn-primary">
            Check out
          </a>
        </div>
      </div>
    </div>
  );
});

export default QCard;
