export type HistoryItem = {
  date: string;
  weight: number;
  trend: string;
};

function saveCurrentWeight(currentWeight: number) {
  localStorage.setItem("currentWeight", currentWeight.toString());
}
function getCurrentWeight(): number {
  const currentWeight = localStorage.getItem("currentWeight");
  return currentWeight ? parseFloat(currentWeight) : 0;
}
function saveTargetWeight(targetWeight: number) {
  localStorage.setItem("targetWeight", targetWeight.toString());
}
function getTargetWeight(): number {
  const targetWeight = localStorage.getItem("targetWeight");
  return targetWeight ? parseInt(targetWeight) : 0;
}
function getHistory(): [] {
  const history = localStorage.getItem("history");
  return history ? JSON.parse(history) : [];
}
function saveHistory(historyItem: HistoryItem) {
  const currentWeight = historyItem.weight;
  const history = localStorage.getItem("history");
  if (history) {
    const parsedHistory = JSON.parse(history);
    parsedHistory.push(historyItem);
    localStorage.setItem("history", JSON.stringify(parsedHistory));
  } else {
    localStorage.setItem("history", JSON.stringify([historyItem]));
  }
  saveCurrentWeight(currentWeight);
}

export const storage = {
  saveCurrentWeight,
  getCurrentWeight,
  saveTargetWeight,
  getTargetWeight,
  getHistory,
  saveHistory,
};
