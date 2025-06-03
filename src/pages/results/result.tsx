import { useParams } from "react-router-dom";
import structures from "../../data"
import { Box, Typography } from "@mui/material";

export default function Result() {
  const { id } = useParams<{ id: string }>();
  const structure = structures[Number(id)];

  if (!structure) {
    return <Typography> OOPS... </Typography>;
  }

  return (
        <Box sx={{ padding: 2, maxWidth: "900px", margin: "auto" }}>
            <Typography variant="h4" gutterBottom>
                {structure.title}
            </Typography>

            <img
                src={structure.img}
                alt={structure.title}
                style={{ width: "100%", maxHeight: "500px", objectFit: "cover", borderRadius: 12 }}
            />

            <Box mt={3}>
                {structure.description.map((text: string, index: number) => (
                <Typography key={index} variant="body1" paragraph>
                    {text}
                </Typography>
                ))}
            </Box>
            </Box>
        );
}