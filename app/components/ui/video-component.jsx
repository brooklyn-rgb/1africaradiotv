export default async function VideoComponent() {
    const src = await getVideoSrc()
   
    return <iframe src={https://www.youtube.com/watch?v=M045SDtBpec} frameborder="0" allowfullscreen />
  }