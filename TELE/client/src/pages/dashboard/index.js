import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import MenuAdmin from "../../components/menu-admin";
import Footer from "../../components/footer-admin";

import Button from "@material-ui/core/Button";

import SaveIcon from "@material-ui/icons/Save";
import api from "../../services/api";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  root: { display: "flex" },
  title: { flexGrow: 1 },
  appBarSpacer: theme.mixins.toolbar,
  content: { flexGrow: 1, height: "100vh", overflow: "auto" },
  container: { paddingTop: theme.spacing(2), paddingBottom: theme.spacing(4) },
  paper: {
    padding: 35,
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  formControl: { width: "100%" },
  btnSuccess: {
    backgroundColor: "blue",
    color: "#fff",
    "&:hover": { backgroundColor: "#12b912" },
  },
}));

export default function UsuarioCadastrar() {
  const classes = useStyles();
  const [nome, setNome] = useState("");
  const [pis, setPis] = useState("");
  const [tipo, setTipo] = useState();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  async function handleSubmit() {
    const data = {
      nome_usuario: nome,
      numero_pis: pis,
      tipo_usuario: tipo,
    };

    if (nome !== "" && pis !== "") {
      const response = await api.post("/api/usuarios", data);

      if (response.status === 200) {
        window.location.href = "/";
      } else {
        alert("Erro ao cadastrar o usuário!");
      }
    } else {
      alert("Por favor, preencha todos os dados!");
    }
  }

  return (
    <div className={classes.root}>
      <MenuAdmin img title={"CADASTRO DE MOTORISTA"} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item sm={12}>
              <Paper className={classes.paper}>
                <h2>Cadastro de Usuários</h2>
                <Grid container spacing={6}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                    inputProps={{
                      maxLength: 40,
                    }}
                      required
                      type="text"
                      id="standard-required"
                      name="nome"
                      label="Nome completo"
                      fullWidth
                      autoComplete="nome"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      variant="outlined"
                      
                    />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <TextField
                      required
                      inputProps={{ min: "0", max: "10", step: "1" }} 
                      id="outlined-number"
                      
                      
                      name="pis"
                      label="Numero PIS"
                      fullWidth
                      autoComplete="pis"
                      value={pis}
                      onChange={(e) => setPis(e.target.value)}
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12} sm={3}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.checkedB}
                          onChange={handleChange}
                          name="checkedB"
                          color="primary"
                        />
                      }
                      label="Ativo"
                      id="tipo"
                      name="tipo"
                      fullWidth
                      autoComplete="tipo"
                      value={tipo}
                      onChange={(e) => setTipo(e.target.value)}
                      
                    />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <TextField
                      disabled
                      required
                      id="grupo"
                      name="grupo"
                      label="Nome/Grupo"
                      fullWidth
                      autoComplete="grupo"
                      variant="filled"
                     
                    />
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <TextField
                      disabled
                      required
                      id="tel"
                      name="tel"
                      label="Numero Telefone"
                      fullWidth
                      autoComplete="tel"
                      variant="filled"
                      
                    />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <TextField
                      disabled
                      required
                      id="token"
                      name="token"
                      label="TOKEN"
                      fullWidth
                      autoComplete="token"
                      variant="filled"
                     
                    />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <TextField
                      disabled
                      required
                      id="score"
                      name="score"
                      label="Score"
                      fullWidth
                      autoComplete="score"
                      variant="filled"
                      
                    />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <TextField
                      disabled
                      required
                      id="cliente"
                      name="cliente"
                      label="Cliente"
                      fullWidth
                      autoComplete="cliente"
                      variant="filled"
                      
                    />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <TextField
                      disabled
                      required
                      id="code"
                      name="code"
                      label="Driver Code"
                      fullWidth
                      autoComplete="code"
                      variant="filled"
                      
                    />
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      onClick={handleSubmit}
                      className={classes.btnSuccess}
                    >
                      <SaveIcon /> Salvar
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Footer />
          </Box>
        </Container>
      </main>
    </div>
  );
}
