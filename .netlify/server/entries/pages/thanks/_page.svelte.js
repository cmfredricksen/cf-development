import { c as create_ssr_component } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-nxpasp.svelte-nxpasp{text-align:center;padding-top:2rem;width:50%;margin:0 auto}.title.svelte-nxpasp.svelte-nxpasp{display:flex;justify-content:space-around;text-align:center}.title.svelte-nxpasp a.svelte-nxpasp{color:var(--clr-medium)}a.svelte-nxpasp.svelte-nxpasp:hover{color:var(--clr-accent)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"container svelte-nxpasp"}"><div class="${"title svelte-nxpasp"}"><h1>Thank You!</h1>
		<a href="${"/"}" class="${"svelte-nxpasp"}">X</a></div>
	<h2>Your request has been sent, I will get back to you soon!</h2>
</div>`;
});
export {
  Page as default
};
