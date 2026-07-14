const products=[
{id:'blazer',name:'Tailored Blazer',price:189,category:'clothing',fit:'cover',sizes:['XS','S','M','L'],variants:[{name:'Black',hex:'#111111',img:'./assets/products/tailored-blazer.webp'},{name:'Ivory',hex:'#eee8dc',img:'./assets/products/colors/blazer-ivory.webp'}],description:'A sharply tailored blazer with clean architectural lines, a softly structured shoulder and a refined wool-blend finish. Designed for effortless layering and quiet confidence.'},
{id:'tote',name:'Leather Tote Bag',price:159,category:'bags',fit:'contain',sizes:[],variants:[{name:'Black',hex:'#111111',img:'./assets/products/leather-tote.webp'},{name:'Ivory',hex:'#eee9df',img:'./assets/products/colors/tote-ivory.webp'}],description:'A minimalist everyday tote crafted in smooth leather with a spacious interior and understated structure. Elegant, practical and made for daily use.'},
{id:'dress',name:'Silk Slip Dress',price:129,category:'clothing',fit:'cover',sizes:['XS','S','M','L'],variants:[{name:'Black',hex:'#111111',img:'./assets/products/silk-slip-dress.webp'},{name:'Ivory',hex:'#f0ebe2',img:'./assets/products/colors/dress-ivory.webp'}],description:'A fluid slip dress with a soft sheen, delicate straps and a clean elongated silhouette. An understated piece for both day and evening.'},
{id:'shirt',name:'Oversized Shirt',price:89,category:'clothing',fit:'contain',sizes:['XS','S','M','L'],variants:[{name:'White',hex:'#f3f0e9',img:'./assets/products/oversized-shirt.webp'},{name:'Black',hex:'#111111',img:'./assets/products/colors/shirt-black.webp'}],description:'A relaxed oversized shirt cut from crisp cotton. Defined by dropped shoulders, precise cuffs and a timeless proportion.'},
{id:'trousers',name:'Wide Leg Trousers',price:119,category:'clothing',fit:'cover',sizes:['XS','S','M','L'],variants:[{name:'Black',hex:'#111111',img:'./assets/products/wide-leg-trousers.webp'},{name:'Ivory',hex:'#efebe2',img:'./assets/products/colors/trousers-ivory.webp'}],description:'High-rise trousers with a fluid wide leg and clean front construction. Tailored to create movement while maintaining a polished silhouette.'},
{id:'belt',name:'Leather Belt',price:49,category:'accessories',fit:'contain',sizes:['70','75','80','85'],variants:[{name:'Black',hex:'#111111',img:'./assets/products/leather-belt.webp'},{name:'Ivory',hex:'#f1ece2',img:'./assets/products/colors/belt-ivory.webp'}],description:'A slim leather belt finished with a minimal metal buckle. Designed to define the waist without distracting from the silhouette.'},
{id:'heels',name:'Leather Slingbacks',price:169,category:'accessories',fit:'contain',sizes:['36','37','38','39','40'],variants:[{name:'Black',hex:'#111111',img:'./assets/products/slingbacks.webp'},{name:'Ivory',hex:'#f0ebe2',img:'./assets/products/colors/heels-ivory.webp'}],description:'Refined leather slingbacks with a pointed toe and balanced low heel. Elegant enough for evening, comfortable enough for everyday wear.'},
{id:'scarf',name:'Silk Scarf',price:59,category:'accessories',fit:'contain',sizes:[],variants:[{name:'Black',hex:'#111111',img:'./assets/products/silk-scarf.webp'},{name:'Ivory',hex:'#f3eee5',img:'./assets/products/colors/scarf-ivory.webp'}],description:'A lightweight silk scarf with a restrained tonal design. Wear it at the neck, around the wrist or tied to a bag.'},
{id:'shoulder',name:'Minimal Shoulder Bag',price:139,category:'bags',fit:'contain',sizes:[],variants:[{name:'Black',hex:'#111111',img:'./assets/products/shoulder-bag.webp'},{name:'Ivory',hex:'#efeae1',img:'./assets/products/colors/shoulder-ivory.webp'}],description:'A compact shoulder bag with a softly curved profile and clean hardware. Designed to carry the essentials with understated ease.'},
{id:'earrings',name:'Sculptural Earrings',price:39,category:'accessories',fit:'contain',sizes:[],variants:[{name:'Silver',hex:'#c7c7c7',img:'./assets/products/silver-earrings.webp'},{name:'Gold',hex:'#c6a15b',img:'./assets/products/colors/earrings-gold.webp'}],description:'Sculptural earrings with a polished finish. A subtle statement designed to complement both tailored and minimal looks.'}
];
const completeLooks={
 blazer:['trousers','heels','tote'], trousers:['blazer','heels','tote'], heels:['blazer','trousers','tote'], tote:['blazer','trousers','heels'],
 dress:['shoulder','earrings','heels'], shoulder:['dress','earrings','heels'], earrings:['dress','shoulder','heels'],
 shirt:['belt','trousers','scarf'], belt:['shirt','trousers','scarf'], scarf:['shirt','trousers','belt']
};
const lookbook={tailored:['blazer','trousers','heels'],evening:['dress','shoulder','earrings'],soft:['blazer','trousers','tote']};
const qs=(s,p=document)=>p.querySelector(s),qsa=(s,p=document)=>[...p.querySelectorAll(s)];
const money=n=>`$${n.toFixed(2)}`;
window.addEventListener('load',()=>setTimeout(()=>qs('.preloader')?.classList.add('is-hidden'),350));
const cursor=qs('.cursor');document.addEventListener('mousemove',e=>{if(cursor){cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'}});
document.addEventListener('mouseover',e=>{if(e.target.closest('a,button'))cursor?.classList.add('is-hover')});document.addEventListener('mouseout',e=>{if(e.target.closest('a,button'))cursor?.classList.remove('is-hover')});
window.addEventListener('scroll',()=>qs('[data-header]')?.classList.toggle('is-scrolled',scrollY>40));
const menuBtn=qs('[data-menu-button]'),menu=qs('[data-mobile-menu]');menuBtn?.addEventListener('click',()=>{const open=menu.classList.toggle('is-open');menuBtn.setAttribute('aria-expanded',open);menu.setAttribute('aria-hidden',!open);document.body.classList.toggle('is-locked',open)});qsa('.mobile-menu a,.mobile-menu button').forEach(x=>x.addEventListener('click',()=>{menu.classList.remove('is-open');menuBtn?.setAttribute('aria-expanded','false');document.body.classList.remove('is-locked')}));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');observer.unobserve(e.target)}}),{threshold:.14});qsa('[data-reveal]').forEach(el=>observer.observe(el));
qs('[data-shop-button]')?.addEventListener('click',e=>{e.preventDefault();qs('.hero')?.classList.add('is-leaving');setTimeout(()=>{qs('#catalog')?.scrollIntoView({behavior:'smooth'});qs('.hero')?.classList.remove('is-leaving')},250)});
function openModal(name){const m=qs(`[data-modal="${name}"]`);if(!m)return;const dialog=qs('.modal-dialog',m);if(dialog)dialog.scrollTop=0;m.scrollTop=0;m.classList.add('is-open');m.setAttribute('aria-hidden','false');document.body.classList.add('is-locked')}
function closeModals(){qsa('[data-modal].is-open').forEach(m=>{m.classList.remove('is-open');m.setAttribute('aria-hidden','true')});if(!qs('.cart.is-open')&&!qs('.wishlist-drawer.is-open'))document.body.classList.remove('is-locked')}
qsa('[data-modal-open]').forEach(b=>b.addEventListener('click',()=>openModal(b.dataset.modalOpen)));qsa('[data-modal-close]').forEach(b=>b.addEventListener('click',closeModals));

const grid=qs('[data-product-grid]');const featuredIds=['blazer','tote','dress','shirt'];
function getProductList(filter){if(filter==='featured')return products.filter(p=>featuredIds.includes(p.id));if(filter==='all')return products;return products.filter(p=>p.category===filter)}
function renderProducts(filter='featured'){
 const list=getProductList(filter);grid.classList.toggle('product-grid--featured',filter==='featured');
 grid.innerHTML=list.map((p,i)=>`<article class="product-card" data-fit="${p.fit||'cover'}" data-reveal style="transition-delay:${Math.min(i,7)*45}ms"><div class="product-media"><span class="product-card-index">${String(i+1).padStart(2,'0')}</span><img src="${p.variants[0].img}" alt="${p.name} in ${p.variants[0].name}" loading="lazy"><button class="heart${wishlist.includes(p.id)?' is-active':''}" type="button" data-wish="${p.id}" aria-label="Save ${p.name}">${wishlist.includes(p.id)?'♥':'♡'}</button><div class="product-actions"><button type="button" data-quick-view="${p.id}">Quick view</button><button class="add-btn" type="button" data-add="${p.id}">Add to bag</button></div></div><div class="product-meta"><h3>${p.name}</h3><p>${money(p.price)}</p><a class="product-arrow" href="./product.html?id=${p.id}" aria-label="View ${p.name}">↗</a><span class="swatches">${p.variants.map(v=>`<i title="${v.name}" style="background:${v.hex}"></i>`).join('')}</span></div></article>`).join('');
 qsa('[data-reveal]',grid).forEach(el=>observer.observe(el));qsa('[data-add]',grid).forEach(b=>b.addEventListener('click',()=>{addToCart(b.dataset.add);openCart()}));qsa('[data-quick-view]',grid).forEach(b=>b.addEventListener('click',()=>openQuickView(b.dataset.quickView)));qsa('[data-wish]',grid).forEach(b=>b.addEventListener('click',()=>toggleWishlist(b.dataset.wish)));
}
qsa('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{qsa('[data-filter]').forEach(x=>x.classList.remove('is-active'));btn.classList.add('is-active');renderProducts(btn.dataset.filter)}));qs('[data-view-all]')?.addEventListener('click',()=>{qsa('[data-filter]').forEach(x=>x.classList.toggle('is-active',x.dataset.filter==='all'));renderProducts('all')});

let quickState={id:null,color:null,image:null,size:null};
function openQuickView(id){
 const p=products.find(item=>item.id===id);if(!p)return;quickState={id:p.id,color:p.variants[0].name,image:p.variants[0].img,size:p.sizes[0]||null};
 const modal=qs('[data-modal="product"]'),image=qs('[data-quick-image]',modal),colors=qs('[data-quick-colors]',modal),selected=qs('[data-quick-selected]',modal),sizes=qs('[data-quick-sizes]',modal),sizeWrap=qs('[data-quick-sizes-wrap]',modal),sizeSelected=qs('[data-quick-size-selected]',modal),add=qs('[data-quick-add]',modal),wish=qs('[data-quick-wish]',modal),details=qs('[data-quick-details]',modal);
 const setVariant=index=>{const variant=p.variants[index];quickState.color=variant.name;quickState.image=variant.img;image.classList.add('is-changing');setTimeout(()=>{image.src=variant.img;image.alt=`${p.name} in ${variant.name}`;image.style.objectFit=p.fit==='contain'?'contain':'cover';image.classList.remove('is-changing')},140);qsa('button',colors).forEach((b,i)=>{b.classList.toggle('is-active',i===index);b.setAttribute('aria-pressed',String(i===index))});selected.textContent=`Selected: ${variant.name}`};
 qs('[data-quick-name]',modal).textContent=p.name;qs('[data-quick-price]',modal).textContent=money(p.price);qs('[data-quick-description]',modal).textContent=p.description;image.src=p.variants[0].img;image.alt=p.name;image.style.objectFit=p.fit==='contain'?'contain':'cover';
 colors.innerHTML=p.variants.map((v,i)=>`<button type="button" class="quick-color${i===0?' is-active':''}" data-variant-index="${i}"><i style="background:${v.hex}"></i><span>${v.name}</span></button>`).join('');qsa('[data-variant-index]',colors).forEach(b=>b.addEventListener('click',()=>setVariant(Number(b.dataset.variantIndex))));
 sizeWrap.hidden=!p.sizes.length;sizes.innerHTML=p.sizes.map((s,i)=>`<button type="button" class="quick-size${i===0?' is-active':''}" data-size="${s}">${s}</button>`).join('');if(p.sizes.length){sizeSelected.textContent=`Selected: ${p.sizes[0]}`;qsa('[data-size]',sizes).forEach(b=>b.addEventListener('click',()=>{quickState.size=b.dataset.size;qsa('[data-size]',sizes).forEach(x=>x.classList.toggle('is-active',x===b));sizeSelected.textContent=`Selected: ${b.dataset.size}`}))}
 add.dataset.quickAdd=p.id;wish.dataset.quickWish=p.id;wish.textContent=wishlist.includes(p.id)?'Saved ♥':'Save ♡';details.href=`./product.html?id=${p.id}`;renderCompleteLook(p.id);setVariant(0);openModal('product');
}
function renderCompleteLook(id){const holder=qs('[data-complete-look]');const ids=(completeLooks[id]||['belt','scarf','earrings']).slice(0,3);holder.dataset.lookFor=id;holder.innerHTML=ids.map(pid=>{const p=products.find(x=>x.id===pid);return `<button type="button" class="complete-item" data-complete-item="${p.id}"><img src="${p.variants[0].img}" alt="${p.name}"><span>${p.name}<small>${money(p.price)}</small></span></button>`}).join('');qsa('[data-complete-item]',holder).forEach(b=>b.addEventListener('click',()=>openQuickView(b.dataset.completeItem)))}
qs('[data-quick-add]')?.addEventListener('click',()=>{addToCart(quickState.id,quickState.color,quickState.image,quickState.size);closeModals();openCart()});qs('[data-quick-wish]')?.addEventListener('click',e=>{toggleWishlist(e.currentTarget.dataset.quickWish);e.currentTarget.textContent=wishlist.includes(e.currentTarget.dataset.quickWish)?'Saved ♥':'Save ♡'});qs('[data-add-full-look]')?.addEventListener('click',()=>{const ids=(completeLooks[quickState.id]||[]);ids.forEach(id=>addToCart(id));addToCart(quickState.id,quickState.color,quickState.image,quickState.size);closeModals();openCart();showToast('Full look added to bag')});

const CART_KEY='sora-cart';
const readStoredCart=()=>{try{const value=JSON.parse(localStorage.getItem(CART_KEY));return Array.isArray(value)?value:[]}catch{return[]}};

function getProduct(id){return products.find(product=>product.id===id)}
function getVariant(product,color){
 if(!product)return null;
 return product.variants.find(variant=>variant.name===color)||product.variants[0];
}
function getValidSize(product,size){
 if(!product?.sizes?.length)return '';
 return product.sizes.includes(size)?size:product.sizes[0];
}
function normalizeCart(items){
 const byProduct=new Map();
 items.forEach(raw=>{
  const product=getProduct(raw?.id);if(!product)return;
  const variant=getVariant(product,raw?.color);
  const normalized={id:product.id,qty:Math.max(1,Number(raw?.qty)||1),color:variant.name,image:variant.img,size:getValidSize(product,raw?.size)};
  const existing=byProduct.get(product.id);
  if(existing){existing.qty+=normalized.qty;existing.color=normalized.color;existing.image=normalized.image;existing.size=normalized.size}
  else byProduct.set(product.id,normalized);
 });
 return [...byProduct.values()];
}
let cart=normalizeCart(readStoredCart());
const saveCart=()=>localStorage.setItem(CART_KEY,JSON.stringify(cart));
saveCart();

function addToCart(id,color,image,size){
 const product=getProduct(id);if(!product)return;
 const variant=getVariant(product,color);
 const chosenSize=getValidSize(product,size);
 const existing=cart.find(item=>item.id===id);
 if(existing){
  existing.qty+=1;
  existing.color=variant.name;
  existing.image=variant.img;
  existing.size=chosenSize;
 }else{
  cart.push({id,qty:1,color:variant.name,image:variant.img,size:chosenSize});
 }
 saveCart();updateCart();showToast(`${product.name} added to bag`);
}
function removeFromCart(id){cart=cart.filter(item=>item.id!==id);saveCart();updateCart()}
function changeCartQty(id,delta){
 const item=cart.find(entry=>entry.id===id);if(!item)return;
 item.qty=Math.max(0,item.qty+delta);
 if(item.qty===0)cart=cart.filter(entry=>entry.id!==id);
 saveCart();updateCart();
}
function changeCartColor(id,color){
 const item=cart.find(entry=>entry.id===id),product=getProduct(id);if(!item||!product)return;
 const variant=getVariant(product,color);item.color=variant.name;item.image=variant.img;saveCart();updateCart();
}
function changeCartSize(id,size){
 const item=cart.find(entry=>entry.id===id),product=getProduct(id);if(!item||!product)return;
 item.size=getValidSize(product,size);saveCart();updateCart();
}
function updateCart(){
 cart=normalizeCart(cart);saveCart();
 const count=cart.reduce((sum,item)=>sum+item.qty,0),countNode=qs('[data-cart-count]');if(countNode)countNode.textContent=count;
 const holder=qs('[data-cart-items]');if(!holder)return;
 holder.innerHTML=cart.length?cart.map(item=>{
  const product=getProduct(item.id),variant=getVariant(product,item.color);item.image=variant.img;item.color=variant.name;
  const colorOptions=product.variants.length>1?`<label class="cart-option"><span>Color</span><select data-cart-color="${product.id}">${product.variants.map(v=>`<option value="${v.name}"${v.name===item.color?' selected':''}>${v.name}</option>`).join('')}</select></label>`:`<p class="cart-color">Color: ${item.color}</p>`;
  const sizeOptions=product.sizes.length?`<label class="cart-option"><span>Size</span><select data-cart-size="${product.id}">${product.sizes.map(size=>`<option value="${size}"${size===item.size?' selected':''}>${size}</option>`).join('')}</select></label>`:'';
  return `<div class="cart-item"><img src="${variant.img}" alt="${product.name} in ${variant.name}"><div class="cart-item-copy"><h3>${product.name}</h3><div class="cart-options">${colorOptions}${sizeOptions}</div><div class="cart-quantity" aria-label="Quantity"><button type="button" data-cart-minus="${product.id}" aria-label="Decrease quantity">−</button><span>${item.qty}</span><button type="button" data-cart-plus="${product.id}" aria-label="Increase quantity">+</button></div><button class="cart-remove" type="button" data-remove="${product.id}">Remove</button></div><strong>${money(product.price*item.qty)}</strong></div>`;
 }).join(''):'<p>Your bag is empty.</p>';
 const total=cart.reduce((sum,item)=>{const product=getProduct(item.id);return sum+(product?product.price*item.qty:0)},0),totalNode=qs('[data-cart-total]');if(totalNode)totalNode.textContent=money(total);
 qsa('[data-remove]',holder).forEach(button=>button.addEventListener('click',()=>removeFromCart(button.dataset.remove)));
 qsa('[data-cart-minus]',holder).forEach(button=>button.addEventListener('click',()=>changeCartQty(button.dataset.cartMinus,-1)));
 qsa('[data-cart-plus]',holder).forEach(button=>button.addEventListener('click',()=>changeCartQty(button.dataset.cartPlus,1)));
 qsa('[data-cart-color]',holder).forEach(select=>select.addEventListener('change',()=>changeCartColor(select.dataset.cartColor,select.value)));
 qsa('[data-cart-size]',holder).forEach(select=>select.addEventListener('change',()=>changeCartSize(select.dataset.cartSize,select.value)));
}
function openCart(){closeWishlist();qs('[data-cart]').classList.add('is-open');qs('[data-cart-overlay]').classList.add('is-open');document.body.classList.add('is-locked')}
function closeCart(){qs('[data-cart]')?.classList.remove('is-open');qs('[data-cart-overlay]')?.classList.remove('is-open');if(!qs('.wishlist-drawer.is-open'))document.body.classList.remove('is-locked')}
qs('[data-cart-open]')?.addEventListener('click',openCart);qs('[data-cart-close]')?.addEventListener('click',closeCart);qs('[data-cart-overlay]')?.addEventListener('click',closeCart);

const WISH_KEY='sora-wishlist';const loadWishlist=()=>{try{return JSON.parse(localStorage.getItem(WISH_KEY))||[]}catch{return[]}};let wishlist=loadWishlist();function saveWishlist(){localStorage.setItem(WISH_KEY,JSON.stringify(wishlist))}function toggleWishlist(id){wishlist=wishlist.includes(id)?wishlist.filter(x=>x!==id):[...wishlist,id];saveWishlist();updateWishlist();renderProducts(qs('[data-filter].is-active')?.dataset.filter||'featured');showToast(wishlist.includes(id)?'Saved to wishlist':'Removed from wishlist')}
function updateWishlist(){qs('[data-wishlist-count]').textContent=wishlist.length;const holder=qs('[data-wishlist-items]');holder.innerHTML=wishlist.length?wishlist.map(id=>{const p=products.find(x=>x.id===id);return `<article class="wishlist-item"><img src="${p.variants[0].img}" alt="${p.name}"><div><h3>${p.name}</h3><p>${money(p.price)}</p><button data-wish-quick="${p.id}">Quick view</button><button data-wish-remove="${p.id}">Remove</button></div></article>`}).join(''):'<p>No saved pieces yet.</p>';qsa('[data-wish-remove]',holder).forEach(b=>b.addEventListener('click',()=>toggleWishlist(b.dataset.wishRemove)));qsa('[data-wish-quick]',holder).forEach(b=>b.addEventListener('click',()=>{closeWishlist();openQuickView(b.dataset.wishQuick)}))}
function openWishlist(){closeCart();qs('[data-wishlist]').classList.add('is-open');qs('[data-wishlist-overlay]').classList.add('is-open');document.body.classList.add('is-locked')}function closeWishlist(){qs('[data-wishlist]')?.classList.remove('is-open');qs('[data-wishlist-overlay]')?.classList.remove('is-open');if(!qs('.cart.is-open'))document.body.classList.remove('is-locked')}
qs('[data-wishlist-open]')?.addEventListener('click',openWishlist);qs('[data-wishlist-close]')?.addEventListener('click',closeWishlist);qs('[data-wishlist-overlay]')?.addEventListener('click',closeWishlist);

qsa('[data-add-look]').forEach(b=>b.addEventListener('click',()=>{const ids=lookbook[b.dataset.addLook]||[];ids.forEach(id=>{const p=products.find(x=>x.id===id);const variant=b.dataset.addLook==='soft'&&p.variants[1]?p.variants[1]:p.variants[0];addToCart(id,variant.name,variant.img,p.sizes[0]||null)});openCart();showToast('Complete look added')}));

document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModals();closeCart();closeWishlist()}});let toastTimer;function showToast(msg){const t=qs('[data-toast]');if(!t)return;t.textContent=msg;t.classList.add('is-visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('is-visible'),1800)}qs('[data-newsletter]')?.addEventListener('submit',e=>{e.preventDefault();showToast('Thank you for joining SORA');e.target.reset()});
const heroSection=qs('[data-hero]'),heroImage=heroSection?.querySelector('.hero-image');if(heroSection&&heroImage&&matchMedia('(pointer:fine)').matches&&!matchMedia('(prefers-reduced-motion: reduce)').matches){heroSection.addEventListener('mousemove',e=>{const r=heroSection.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;heroImage.style.transform=`scale(1.03) translate(${x*-7}px,${y*-5}px)`});heroSection.addEventListener('mouseleave',()=>heroImage.style.transform='scale(1.02)')}
updateCart();updateWishlist();renderProducts();


// SORA v18 — Journal internal navigation and reading progress
(() => {
  const dialog = document.querySelector('.journal-modal-dialog');
  if (!dialog) return;
  const buttons = [...dialog.querySelectorAll('[data-journal-target]')];
  const sections = buttons.map(button => document.getElementById(button.dataset.journalTarget)).filter(Boolean);
  const progress = dialog.querySelector('[data-journal-progress]');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const target = document.getElementById(button.dataset.journalTarget);
      if (!target) return;
      const top = target.getBoundingClientRect().top - dialog.getBoundingClientRect().top + dialog.scrollTop - 36;
      dialog.scrollTo({ top, behavior: 'smooth' });
    });
  });

  const updateJournalState = () => {
    const max = Math.max(1, dialog.scrollHeight - dialog.clientHeight);
    if (progress) progress.style.width = `${Math.min(100, Math.max(0, dialog.scrollTop / max * 100))}%`;
    let current = sections[0];
    const threshold = dialog.getBoundingClientRect().top + 160;
    sections.forEach(section => { if (section.getBoundingClientRect().top <= threshold) current = section; });
    buttons.forEach(button => button.classList.toggle('is-active', button.dataset.journalTarget === current?.id));
  };
  dialog.addEventListener('scroll', updateJournalState, { passive: true });
  updateJournalState();
})();

/* SORA v20 — mobile viewport and sheet reset */
(function(){
  const setViewportUnit=()=>document.documentElement.style.setProperty('--app-height',`${window.innerHeight}px`);
  setViewportUnit();
  window.addEventListener('resize',setViewportUnit,{passive:true});
  window.addEventListener('orientationchange',()=>setTimeout(setViewportUnit,120),{passive:true});

  const quickDialog=document.querySelector('[data-modal="product"] .product-modal-layout');
  document.addEventListener('click',event=>{
    const trigger=event.target.closest('[data-quick-view]');
    if(trigger && quickDialog){
      requestAnimationFrame(()=>{quickDialog.scrollTop=0});
    }
  });
})();
