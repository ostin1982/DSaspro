import { useLocation, useNavigate } from "react-router";
import { useLocalObservable } from "mobx-react-lite";
import { ChangeEvent, FormEvent } from "react";
import { ROUTER_LINK } from "@/shared/config/router";
import { signIn } from "@/features/signIn";

export const useModel = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const navigateTo = location.state?.from?.pathname || ROUTER_LINK.PROFILE;
  const navigateOptions = { replace: true };

  const model = useLocalObservable(() => {
    return {
      _email: "",
      _isLoading: false,

      async handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        model._isLoading = true;
        await signIn({ email: model.email });
        model._isLoading = false;

        navigate(navigateTo, navigateOptions);
      },

      handleElementChange(event: ChangeEvent<HTMLInputElement>) {
        model.handleChange("email", event);
      },

      handleChange(field: "email", event: ChangeEvent<HTMLInputElement>) {
        model[`_${field}`] = event.target.value;
      },

      get email() {
        return model._email;
      },

      get isDisabled() {
        return model._isLoading;
      },
    };
  });

  return model;
};
