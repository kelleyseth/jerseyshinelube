export default function Infocard (props: {link: string; title: string; info: string }) {
    return (
        <a
          href={props.link}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            {props.title}
            {/* <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span> */}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            {props.info}
          </p>
        </a>
    );
}