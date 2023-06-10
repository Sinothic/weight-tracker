import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomeView.vue";
import Trends from "@/views/TrendsView.vue";
import History from "@/views/HistoryView.vue";
import Profile from "@/views/ProfileView.vue";
import AddRecord from "@/views/AddRecordView.vue";

export const routes = [
  { path: "/", component: Home },
  { path: "/home", component: Home },
  { path: "/trends", component: Trends },
  { path: "/history", component: History },
  { path: "/profile", component: Profile },
  { path: "/add", component: AddRecord },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
