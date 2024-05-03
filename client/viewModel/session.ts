import type { DataEnvelope } from "@/model/transportTypes";
import type { User } from "@/model/users";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import * as myFetch from "@/model/myfetch";
import { useToast } from "vue-toast-notification";

const session  = reactive({
    user: null as User | null,
    isLoading: 0,
});

export function useLogin() {
    const router = useRouter();
    return {
        async login(user: User) {
            const x = await api<User>("users/login", user);
            if(x){
                session.user = x.data;
                router.push("/pv");
            }
        },
        logout() {
            session.user = null;
            router.push("/");   
        }
    };
}

export const refSession = () => session;

export function api<T>(action: string, data?: unknown, method?: string){
    session.isLoading++;
    return myFetch.api<T>(action, data, method)
    .finally(() => session.isLoading--);
}
