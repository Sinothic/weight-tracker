<template>
  <div class="p-6">
    <AvatarInfo />
    <Divider class="my-4" />
    <Title title="CONTA" />
    <ProfileItems icon="ph-user-circle" text="Dados pessoais" />
    <Divider class="my-4" />
    <Title title="Preferências" />
    <ProfileItems icon="ph-bell" text="Notificações" />
    <ProfileItems
      icon="ph-target"
      text="Definir meta"
      @click="onGoToGoalClick"
    />
    <Divider class="my-4" />
    <ProfileItems
      icon="ph-question"
      :show-caret="false"
      text="Central de Ajuda"
    />
    <ProfileItems
      icon="ph-sign-out"
      :show-caret="false"
      :is-red="true"
      text="Sair"
    />
  </div>
</template>

<script setup lang="ts">
import AvatarInfo from "@/components/partials/AvatarInfo.vue";
import Divider from "@/components/partials/Divider.vue";
import Title from "@/components/partials/Title.vue";
import ProfileItems from "@/components/partials/ProfileItems.vue";

import { useRouter } from "vue-router";

const router = useRouter();
function onGoToGoalClick() {
  router.push("/goal");
}
</script>
