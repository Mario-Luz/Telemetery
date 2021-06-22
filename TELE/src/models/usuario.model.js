const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema(
  {
    nome_usuario: String,
    numero_pis: Number,
    tipo_usuario: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const usuario = mongoose.model("Usuario", DataSchema);
module.exports = usuario;
