export const generateAdvice=async()=>{
  const response=await fetch('https://api.adviceslip.com/advice');
  return response.json();
}