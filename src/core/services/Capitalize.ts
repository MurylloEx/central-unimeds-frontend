
export function capitalize(text: string){
  return text.toLowerCase().split(' ').map(s => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }).join(' ');
}
