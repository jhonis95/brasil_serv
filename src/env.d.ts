declare module '@alpinejs/anchor';
declare module '@alpinejs/collapse'
declare module 'motion'; 

interface Window {
  Alpine: import('alpinejs').Alpine;
  animate: typeof import('motion').animate; 
}