import { DownloadElement } from "./DownloadElement.contact"
export default function DownloadMaterials () {
    return <section className="download_elements">
        <DownloadElement file="english.pdf">English</DownloadElement>
        <DownloadElement file="polish.pdf">Polish</DownloadElement>
    </section>
}