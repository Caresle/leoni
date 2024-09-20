'use client'
import { AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertDialog } from "@radix-ui/react-alert-dialog";
import { useState } from "react";
import { insertRecord } from "./_actions/insertRecord";
import useDialog from "@/hooks/useDialog";
import DialogQr from "./_components/DialogQr";

const Dialog = ({disabled, items, setItems, setUrl, dialog}) => {
  const onConfirm = async () => {
    const id = await insertRecord(items)
    setItems([])
    setUrl(window.location.href + id)
    dialog.setOpen(true)
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" disabled={disabled}>Guardar</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Guardar registro</AlertDialogTitle>
          <AlertDialogDescription>
            Seguro que quieres guardar los registros?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>Continuar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}


export default function Home() {
  const [list, setList] = useState([])
  const [text, setText] = useState("")
  const [url, setUrl] = useState("https://www.google.com")
  const dialog = useDialog()

  return (
    <div className="w-full h-screen p-4 bg-slate-200">
      <h1 className="text-center text-2xl font-semibold">Lista de carretes</h1>
      <div className="flex items-center gap-2">
        <Input
          placeholder="Carrete"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button onClick={() => {
          if (!text) return
          if (text.length < 0) return
          setList([...list, text])
          setText("")
        }}>Agregar</Button>
        <Dialog disabled={list.length === 0} items={list} setItems={setList} setUrl={setUrl} dialog={dialog} />
      </div>

      <div className="mt-4 flex flex-col gap-2">
        {
          list.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-full bg-white p-2 rounded-lg">{item}</div>
              <Button variant="destructive" onClick={() => setList([...list.slice(0, index), ...list.slice(index + 1)])}>
                Eliminar
              </Button>
            </div>
          ))
        }
      </div>
      <DialogQr url={url} hook={dialog} />
    </div>
  );
}
