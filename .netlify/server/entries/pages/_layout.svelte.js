import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
const global = "";
const Nav_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: "a.svelte-1sko6q8{text-decoration:none}a.svelte-1sko6q8:hover{color:var(--clr-accent)}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$8);
  return `<nav><a href="${"#contact"}" class="${"svelte-1sko6q8"}">Contact Me!</a>
</nav>`;
});
const Header_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: "header.svelte-eacpbb{background-color:var(--clr-dark);padding:1rem;display:flex;justify-content:space-between;align-items:baseline}.title.svelte-eacpbb{display:flex;align-items:baseline}h1.svelte-eacpbb{font-family:var(--font-accent);color:var(--clr-light)}p.svelte-eacpbb{font-family:var(--font-heading);color:var(--clr-accent);margin:0 1rem}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$7);
  return `<header class="${"svelte-eacpbb"}"><div class="${"title svelte-eacpbb"}"><h1 class="${"svelte-eacpbb"}">CF Development</h1>
		<p class="${"svelte-eacpbb"}">Custom Design built for Performance</p></div>
	${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
</header>`;
});
const Hero_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".hero.svelte-kmioil.svelte-kmioil{display:grid;grid-template-columns:1fr 1.5fr;gap:2rem;background-color:var(--clr-black);height:75vh;border-bottom:30px solid var(--clr-accent);border-radius:15px;border-bottom-right-radius:100px;padding:1rem 1rem 2rem;margin:1rem auto 3rem;width:70%}.hero.svelte-kmioil .left h1.svelte-kmioil{color:var(--clr-light);width:100%;margin:1rem;padding:0.5rem;padding-right:2rem}.right.svelte-kmioil.svelte-kmioil{width:100%;display:grid;gap:1rem;grid-template-rows:1fr 2fr;padding:1rem 0}.right.svelte-kmioil .icon-box.svelte-kmioil{text-align:center}.right.svelte-kmioil .text-box p.svelte-kmioil{color:var(--clr-light);font-weight:700;line-height:1.5;width:70%;margin:0 auto}.right.svelte-kmioil .text-box ul.svelte-kmioil{margin:1rem auto;padding:1rem 0;width:70%;display:flex;flex-wrap:wrap}.right.svelte-kmioil .text-box li.svelte-kmioil{margin:0.5rem 1rem;list-style:none;font-family:var(--font-heading);text-align:center;list-style-type:'\\1f538'}.material-symbols-outlined.svelte-kmioil.svelte-kmioil{font-size:4rem;color:var(--clr-accent);padding:1rem;justify-self:center}",
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$6);
  return `<div class="${"hero svelte-kmioil"}"><div class="${"left"}"><h1 class="${"svelte-kmioil"}">Hello, my name is Christine and I have over 15 years of graphic design and web development
			experience...
		</h1></div>
	<div class="${"right svelte-kmioil"}"><div class="${"icon-box svelte-kmioil"}"><span class="${"material-symbols-outlined svelte-kmioil"}">wb_incandescent </span>
			<span class="${"material-symbols-outlined svelte-kmioil"}">wb_incandescent </span>
			<span class="${"material-symbols-outlined svelte-kmioil"}">wb_incandescent </span></div>
		<div class="${"text-box"}"><p class="${"svelte-kmioil"}">I can take care of your website so you don&#39;t have to!</p>
			<ul class="${"svelte-kmioil"}"><li class="${"svelte-kmioil"}">Planning</li>
				<li class="${"svelte-kmioil"}">Designing</li>
				<li class="${"svelte-kmioil"}">Building</li>
				<li class="${"svelte-kmioil"}">Deploying</li>
				<li class="${"svelte-kmioil"}">Maintaining</li>
				<li class="${"svelte-kmioil"}">&amp; more!</li></ul></div></div>
</div>`;
});
const PlanDesign_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".container.svelte-1fveybf{display:flex;flex-direction:column;padding:2rem 1rem;margin:2rem 0;background-color:var(--clr-dark);gap:2rem;border:3px solid var(--clr-light);border-radius:2rem}h1.svelte-1fveybf{color:var(--clr-light);text-shadow:1px 1px 1px var(--clr-black)}p.svelte-1fveybf{color:var(--clr-white)}.left.svelte-1fveybf{display:flex;align-items:baseline}.material-symbols-outlined.svelte-1fveybf{margin:0 2rem;color:var(--clr-accent);font-size:2rem;text-shadow:1px 1px 1px var(--clr-black)}",
  map: null
};
const PlanDesign = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<div class="${"container svelte-1fveybf"}"><div class="${"plan"}"><div class="${"left svelte-1fveybf"}"><h1 class="${"svelte-1fveybf"}">Planning</h1>
			<span class="${"material-symbols-outlined svelte-1fveybf"}">view_quilt</span></div>
		<p class="${"svelte-1fveybf"}">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga quod rem ullam natus ratione
			enim maiores modi reiciendis. Voluptate neque, repellendus ipsum illum nulla veniam provident,
			accusamus nihil unde molestias dolorem magni atque. Neque quasi quibusdam fugiat eum laborum
			itaque aspernatur sunt culpa assumenda! Incidunt sapiente voluptatem animi consequatur ex
			cupiditate tempora eos dolorem, praesentium ducimus, sunt fugit. Modi asperiores, eveniet
			sunt, corrupti ipsa autem porro soluta iusto mollitia blanditiis sed dignissimos
			exercitationem temporibus ullam?
		</p></div>
	<div class="${"design"}"><div class="${"left svelte-1fveybf"}"><h1 class="${"svelte-1fveybf"}">Designing</h1>
			<span class="${"material-symbols-outlined svelte-1fveybf"}">brush</span></div>
		<p class="${"svelte-1fveybf"}">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id molestias vitae eveniet quas. Ut,
			molestiae in voluptate error beatae a esse vitae. Omnis, eum corrupti repellendus aliquid
			excepturi nam quos quibusdam velit quae vitae dolorem beatae delectus inventore doloribus.
			Voluptatum tenetur praesentium inventore dolor? Maxime est beatae aliquam fugiat animi culpa,
			similique reprehenderit nulla numquam dolorum quidem explicabo, aut voluptates cupiditate
			dolore quisquam ratione? Officia laboriosam reprehenderit ipsum officiis nostrum obcaecati non
			saepe earum adipisci?
		</p></div>
</div>`;
});
const Contact_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".container.svelte-1bm51yv{display:flex;flex-direction:column;width:80%}h2.svelte-1bm51yv{color:var(--clr-white)}form.svelte-1bm51yv{display:flex;flex-direction:column;border-radius:2rem;margin:1rem 0;background-color:var(--clr-dark);padding:1rem}label.svelte-1bm51yv{color:var(--clr-white);margin:0;margin:0.5rem 0;font-family:var(--font-text)}input.svelte-1bm51yv{padding:0}button.svelte-1bm51yv{width:25%;margin:1rem 0;font-family:var(--font-accent)}",
  map: null
};
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<div class="${"container svelte-1bm51yv"}"><h2 id="${"contact"}" class="${"svelte-1bm51yv"}">Contact Me</h2>
	<form action="${"https://formsubmit.co/cmfredricksen@gmail.com"}" method="${"POST"}" class="${"svelte-1bm51yv"}"><label for="${"name"}" class="${"svelte-1bm51yv"}">Name:</label>
		<input type="${"text"}" name="${"name"}" required class="${"svelte-1bm51yv"}">
		<label for="${"email"}" class="${"svelte-1bm51yv"}">Email:</label>
		<input type="${"email"}" name="${"email"}" required class="${"svelte-1bm51yv"}">
		<label for="${"phone"}" class="${"svelte-1bm51yv"}">Phone:</label>
		<input type="${"text"}" name="${"phone"}" class="${"svelte-1bm51yv"}">
		
		<label for="${"message"}" class="${"svelte-1bm51yv"}">Message:</label>
		<textarea name="${"message"}" id="${"message"}" cols="${"30"}" rows="${"10"}"></textarea>
		<input type="${"hidden"}" name="${"_subject"}" value="${"development"}" class="${"svelte-1bm51yv"}">
		
		<button type="${"submit"}" class="${"svelte-1bm51yv"}">Send</button></form>
</div>`;
});
const BuildDeploy_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".container.svelte-1jo57js{display:flex;width:70%;gap:2rem;justify-content:space-around;margin:0 auto;border-radius:2rem}.card.svelte-1jo57js{background-color:var(--clr-light);width:50%;height:75vh;padding:2rem;border-radius:2rem;border:2px solid var(--clr-medium);border-bottom:15px solid var(--clr-dark)}.card-title.svelte-1jo57js{display:flex;align-items:center;justify-content:space-between;margin-bottom:2rem}h1.svelte-1jo57js{color:var(--clr-dark);text-shadow:1px 1px 1px var(--clr-black)}p.svelte-1jo57js{font-weight:700;line-height:1.5}.material-symbols-outlined.svelte-1jo57js{color:var(--clr-accent);text-shadow:1px 1px 3px var(--clr-black);font-size:2rem}",
  map: null
};
const BuildDeploy = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<div class="${"container svelte-1jo57js"}"><div class="${"card svelte-1jo57js"}"><div class="${"card-title svelte-1jo57js"}"><h1 class="${"svelte-1jo57js"}">Build</h1>
			<div class="${"material-symbols-outlined svelte-1jo57js"}">build</div></div>
		<p class="${"svelte-1jo57js"}">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis id similique incidunt ex
			aperiam eligendi ab eum nostrum magnam maiores possimus esse corporis accusantium non tempore
			cupiditate odio temporibus culpa deleniti, error sunt dolor modi veniam? Molestiae laboriosam
			in odit temporibus velit cumque alias eaque nesciunt fugiat, illo molestias officiis.
		</p></div>
	<div class="${"card svelte-1jo57js"}"><div class="${"card-title svelte-1jo57js"}"><h1 class="${"svelte-1jo57js"}">Deploy</h1>
			<div class="${"material-symbols-outlined svelte-1jo57js"}">cloud</div></div>
		<p class="${"svelte-1jo57js"}">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt at officiis vitae soluta
			facilis deserunt magnam fugiat itaque! Natus delectus fuga, soluta nobis eaque ipsum porro,
			labore in, quo animi libero adipisci reiciendis provident aliquam. Sint soluta harum ab
			adipisci explicabo necessitatibus error voluptatibus hic, magni qui! Doloribus, possimus iste.
		</p></div>
</div>`;
});
const MaintainMore_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".container.svelte-ja0ehn{background-color:var(--clr-black);height:75vh;margin:2rem auto;padding:2rem;border-bottom:30px solid var(--clr-accent);border-radius:15px;border-bottom-right-radius:100px}.title.svelte-ja0ehn{display:flex;align-items:center}h1.svelte-ja0ehn{color:var(--clr-light)}p.svelte-ja0ehn{color:var(--clr-white);padding:1rem 0;line-height:1.5}.card-box.svelte-ja0ehn{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;margin:0 auto;padding:2rem}li.svelte-ja0ehn{list-style-type:'\\1f538';margin:0 1rem;padding:1rem}.material-symbols-outlined.svelte-ja0ehn{color:var(--clr-accent);font-size:2rem;margin:0 2rem}",
  map: null
};
const MaintainMore = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="${"container svelte-ja0ehn"}"><div class="${"title svelte-ja0ehn"}"><h1 class="${"svelte-ja0ehn"}">Maintenance &amp; More...</h1>
		<span class="${"material-symbols-outlined svelte-ja0ehn"}">monitoring</span></div>
	<p class="${"svelte-ja0ehn"}">Once your website is online regular monitoring is valuable. I will periodically assess your
		site&#39;s performance and make any updates that are needed. I will also provide analytic data and
		work on search engine optimization so your site&#39;s visibility continues to improve.
	</p>
	<div class="${"card-box svelte-ja0ehn"}"><li class="${"svelte-ja0ehn"}">Special Event Pages</li>
		<li class="${"svelte-ja0ehn"}">Logo Design</li>
		<li class="${"svelte-ja0ehn"}">Search Engine Optimization</li>
		<li class="${"svelte-ja0ehn"}">Updates</li>
		<li class="${"svelte-ja0ehn"}">Website Growth</li>
		<li class="${"svelte-ja0ehn"}">Serverless Cloud Computing</li>
		<li class="${"svelte-ja0ehn"}">Top Speed</li>
		<li class="${"svelte-ja0ehn"}">&amp; Much More!</li></div>
</div>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "footer.svelte-zdtfi1{display:grid;grid-template-columns:1fr 1fr;background-color:var(--clr-black);padding:2rem 1rem 1rem}p.svelte-zdtfi1{color:var(--clr-white);width:100%;text-align:center;padding:5rem 0}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="${"svelte-zdtfi1"}"><p class="${"svelte-zdtfi1"}">© 2023 cf development · All Rights Reserved</p>
	${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}
</footer>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wrapper.svelte-xqxh2y{margin:0 auto;padding:1rem}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1scddf6_START -->${$$result.title = `<title>CF DEV</title>`, ""}<!-- HEAD_svelte-1scddf6_END -->`, ""}

<link rel="${"stylesheet"}" href="${"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"}">

${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}
<div class="${"wrapper svelte-xqxh2y"}">${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}
	${validate_component(PlanDesign, "PlanDesign").$$render($$result, {}, {}, {})}
	${validate_component(BuildDeploy, "BuildDeploy").$$render($$result, {}, {}, {})}
	${validate_component(MaintainMore, "MaintainMore").$$render($$result, {}, {}, {})}
	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  Layout as default
};
