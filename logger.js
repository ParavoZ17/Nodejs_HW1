import { appendFile } from "node:fs/promises";

export async function logMessage(message) {
  try {
    await appendFile("log.txt", message + "\n");
  } catch (err) {
    console.error("Помилка при записі лога:", err);
  }
}
