"use client";
import { useState } from "react";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import axios from "axios";

export default function Home() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchImage = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/api/dog");
      setImageUrl(res.data.message);
    } catch (err) {
      console.error("Erro ao buscar imagem", err);
    } finally {
      setLoading(false);
    }
  };

  return (
      <Box
          sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: 2,
            bgcolor: "#d3d3d3",
          }}
      >
        <Typography variant="h4" color="#000" gutterBottom>
          🐶 Imagem Aleatória de Cachorro 🐶
        </Typography>

        <Button variant="contained" onClick={fetchImage} disabled={loading}>
          {loading ? "Carregando..." : "Buscar Imagem"}
        </Button>

        {loading && <CircularProgress sx={{ mt: 4 }} />}

        {!loading && imageUrl && (
            <Box
                component="img"
                src={imageUrl}
                alt="Cachorro"
                sx={{
                  mt: 4,
                  maxWidth: "90vw",
                  maxHeight: "60vh",
                  borderRadius: 2,
                  boxShadow: 3,
                }}
            />
        )}
      </Box>
  );
}
