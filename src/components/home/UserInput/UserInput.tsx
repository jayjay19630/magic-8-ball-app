import { Button, Stack, TextField } from "@mui/material";
import "./UserInput.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { QuestionAnswer } from "@mui/icons-material";
import { fetchQuery } from "../../../utils/FetchQuery";

interface IUserInput {
  query: string;
}

/**
 * User Input component which receives user query and fetches response from OpenAI
 */
export const UserInput = (props: {
  isShaking: boolean;
  isOpen: boolean;
  setIsShaking: (bool: boolean) => void;
  setResponse: (res: string) => void;
}) => {
  // Initialise form details and submit callback
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserInput>();

  const handleQuerySubmit: SubmitHandler<IUserInput> = (data: {
    query: string;
  }) => {
    props.setIsShaking(true);
    fetchQuery(data.query, props.setResponse, props.setIsShaking);
  };

  // Form to receive and submit query information
  return (
    <form onSubmit={handleSubmit(handleQuerySubmit)}>
      <Stack spacing={2} width={700} direction={"row"} sx={{ zIndex: -1 }}>
        <TextField
          type="query"
          {...register("query", { required: "Query is required" })}
          placeholder="Query the ball..."
          error={!!errors.query}
          helperText={errors.query?.message}
          style={{ width: 3000 }}
          disabled={props.isShaking || props.isOpen}
        />
        <Button
          sx={{
            width: 100,
            height: 50,
            backgroundColor: "#2c67f2",
          }}
          type="submit"
          variant="contained"
          disabled={props.isShaking || props.isOpen}
          disableTouchRipple
        >
          <QuestionAnswer />
        </Button>
      </Stack>
    </form>
  );
};
