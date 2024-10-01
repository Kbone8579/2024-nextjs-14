import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpWideShort } from "@fortawesome/free-solid-svg-icons/faArrowUpWideShort";

export default function Home() {
  return (
    <div className="text-blue-500">
      <h1>홈 페이지!!!???asdsadsadsad</h1>
      <FontAwesomeIcon icon={faArrowUpWideShort} />
      <img src="/img/237-200x300.jpg" />
      <video src="/video/video_1.mp4" autoplay muted loop />
    </div>
  );
}
