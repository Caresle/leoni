'use client'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import React from 'react'
import QrComp from './QrComp'

export default function DialogQr({url, hook}) {
    return (
        <AlertDialog open={hook.open}>
            <AlertDialogTrigger asChild>
                <span></span>
            </AlertDialogTrigger>
            <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Codigo del registro</AlertDialogTitle>
                <AlertDialogDescription className="flex justify-center">
                    <QrComp url={url} />
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel onClick={() => hook.setOpen(false)}>Cerrar</AlertDialogCancel>
                <AlertDialogAction onClick={() => hook.setOpen(false)}>Imprimir Etiqueta</AlertDialogAction>
            </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
