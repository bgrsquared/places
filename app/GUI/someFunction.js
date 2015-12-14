export default function doge(){
  return {
    count: 0,
    click (n = 1){
      this.count += n;
    }
  }
}