import { Button, Stack, TextField } from "@mui/material";
import "./UserInput.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { QuestionAnswer } from "@mui/icons-material";

interface IUserInput {
  query: string;
}

export const UserInput = (props: {
  isShaking: boolean;
  setIsShaking: Function;
  fetchQuery: Function;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserInput>();

  const handleQuerySubmit: SubmitHandler<IUserInput> = (data: {
    query: string;
  }) => {
    props.setIsShaking(true);
    props.fetchQuery(data.query);
  };

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
          disabled={props.isShaking}
        />
        <Button
          sx={{
            width: 100,
            height: 50,
            backgroundColor: "#2c67f2",
            zIndex: -1,
          }}
          type="submit"
          variant="contained"
          disabled={props.isShaking}
          disableTouchRipple
        >
          <QuestionAnswer />
        </Button>
      </Stack>
    </form>
  );
};
