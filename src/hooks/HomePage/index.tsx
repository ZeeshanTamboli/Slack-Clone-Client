import { useState } from "react";
import axios from "axios";
import { Service } from "../../types/Service";
import { CreateWorkspaceFormValues } from "../../components/HomePage/CreateWorkspaceForm/index";

export const useCreateWorkspace = (url: string) => {
  const [service, setService] = useState<Service<CreateWorkspaceFormValues>>({
    status: "init"
  });

  const createWorkspaceAPI = async (workspace: CreateWorkspaceFormValues) => {
    setService({ status: "loading" });

    try {
      const response = await axios.post(url, workspace, {
        headers: { "Content-Type": "application/json" }
      });
      setService({ status: "loaded", payload: response.data });
    } catch (error) {
      setService({ status: "error", error });
    }
  };

  return {
    service,
    createWorkspaceAPI
  };
};
