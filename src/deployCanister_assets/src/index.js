import { deployCanister } from "../../declarations/deployCanister";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with deployCanister actor, calling the greet method
  const greeting = await deployCanister.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
