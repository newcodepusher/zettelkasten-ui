import React, { useEffect, useMemo, useState } from 'react'
import { LinksByNodeId, NodeByCite, NodeById } from '../pages/index'
import { ProcessedOrg } from './processOrg'
import {fetchNodeById} from "./dataSource";

export interface UniOrgProps {
  nodeById: NodeById
  previewNode: any
  setPreviewNode: any
  nodeByCite: NodeByCite
  setSidebarHighlightedNode: any
  openContextMenu: any
  outline: boolean
  collapse: boolean
  linksByNodeId: LinksByNodeId
  macros?: { [key: string]: string }
  attachDir: string
  useInheritance: boolean
}

export const UniOrg = (props: UniOrgProps) => {
  const {
    openContextMenu,
    setSidebarHighlightedNode,
    nodeById,
    nodeByCite,
    previewNode,
    setPreviewNode,
    outline,
    collapse,
    linksByNodeId,
    macros,
    attachDir,
    useInheritance,
  } = props

  const [previewText, setPreviewText] = useState('')

  const id = encodeURIComponent(encodeURIComponent(previewNode.id))
  useEffect(() => {
    fetchNodeById(id)
      .then((res) => {
        return res
      })
      .then((res) => {
        if (res === '') {
          return '(empty node)'
        }
        if (res !== 'error') {
          console.log(res)
          setPreviewText(res)
        }
      })
      .catch((e) => {
        setPreviewText('(could not find node)')
        console.log(e)
        return 'Could not fetch the text for some reason, sorry!\n\n This can happen because you have an id with forward slashes (/) in it.'
      })
  }, [previewNode.id])

  return (
    <>
      {previewText && previewNode && (
        <ProcessedOrg
          {...{
            nodeById,
            previewNode,
            setPreviewNode,
            previewText,
            nodeByCite,
            setSidebarHighlightedNode,
            openContextMenu,
            outline,
            collapse,
            linksByNodeId,
            attachDir,
            useInheritance,
          }}
          macros={macros || {}}
        />
      )}
    </>
  )
}
