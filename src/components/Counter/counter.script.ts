console.log("counterValueElement");
import { $count } from "../../store/counter";
const counterValueElement = document.getElementById("counter-value");

if (counterValueElement) {
  counterValueElement.innerHTML = String($count.get());

  $count.subscribe((state) => {
    counterValueElement.innerHTML = String(state);
  });
}
