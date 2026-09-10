"use client";
import { useState } from "react";

export default function AdminContent() {
  const [nome, setNome] = useState<string>("");
  const [slug, setSlug] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");
  const [preco, setPreco] = useState<number>(0);
  const [comparePreco, setComparePreco] = useState<number>(0);
  const [sku, setSku] = useState<string>("");
  const [estoque, setEstoque] = useState<number>(0);
  const [ativo, setAtivo] = useState<boolean>(true);
  const [destaque, setDestaque] = useState<boolean>(false);
  const [categoriaId, setCategoriaId] = useState<string>("");

  return (
    <h1>Admin</h1>
  )
}
