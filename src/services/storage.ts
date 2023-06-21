export type HistoryItem = {
  id: string;
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

function getStartWeight(): HistoryItem | null {
  const history = localStorage.getItem("history");
  if (history) {
    const parsedHistory = JSON.parse(history);
    return parsedHistory[0];
  }
  return null;
}

function getHistory(): [] {
  const history = localStorage.getItem("history");
  return history ? JSON.parse(history) : [];
}
function saveHistory(historyItem: HistoryItem) {
  historyItem.id = new Date().getTime().toString();
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

function deleteHistoryItem(deleteHistoryItem: HistoryItem) {
  const history = localStorage.getItem("history");
  if (history) {
    const parsedHistory = JSON.parse(history);
    const newHistory = parsedHistory.filter(
      (item: HistoryItem) => item.id !== deleteHistoryItem.id
    );
    localStorage.setItem("history", JSON.stringify(newHistory));
  }
}

export const storage = {
  saveCurrentWeight,
  saveTargetWeight,
  saveHistory,
  getCurrentWeight,
  getTargetWeight,
  getHistory,
  getStartWeight,
  deleteHistoryItem,
};
