"use client";

import Room from "../room/Room";

interface Props {
  goWorkspace: () => void;
}

export default function HomeRoom({ goWorkspace }: Props) {
  return <Room onOpenWorkspace={goWorkspace} />;
}