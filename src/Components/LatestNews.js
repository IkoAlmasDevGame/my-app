import {Card, Container, Row, Col, Image} from 'react-bootstrap';
import penculikanImage from '../assets/images/latest/penculikan.jpeg';
import '../style/LandingPage.css';

const Latest = () => {
    return (
        <div>
            <div id='latest' className='text-center mt-1 mb-2 font'>Berita Terkini</div>
            <Container>
                <Row>
                    <Col>
                        <Card className="bg-dark text-white">
                            <Card.Title className='text-center'>Rekam Jejak Ngeri Pemulung Penculik Bocah Kini Diburu Polisi</Card.Title>
                            <Image src={penculikanImage} alt='Penculikan Bocah'/>
                            <Card.Body>
                            <Card.Text>
                                Kamarudin menyampaikan polisi menduga Iwan Sumarno menjadi pelaku penculikan berdasarkan penelurusan CCTV. Kemudian, 
                                Komarudin menyebut Iwan Sumarno sempat diamankan warga di daerah Pademangan, Jakarta Utara.
                                "Kami mendapatkan informasi dengan ciri-ciri yang sama, seseorang yang pernah diamankan di RW 5 Pademangan di kisaran bulan Juli, 
                                orang yang diamankan diduga menggelapkan sepeda motor,".
                                Komarudin mengatakan pihaknya menemukan kartu tanda penduduk (KTP) terduga pelaku tersebut. Komarudin mengatakan pihaknya kemudian mencocokkan 
                                identitas dari pemilik KTP tersebut dengan pelaku penculikan. "Bahwa yang bersangkutan memegang KTP, dari sini kita telusuri, dan alhamdulillah 
                                kita menemukan KTP, ini identitas KTP terduga pelaku, yang dimana orang tua korban mengatakan Yudi, beberapa saksi mengatakan Herman, 
                                nama sesungguhnya adalah ini, Iwan Sumarno kelahiran 1980 alamat di Rorotan," ujarnya.
                                </Card.Text>
                                <Card.Text>
                                Komarudin mengatakan, dari KTP tersebut, diketahui terduga pelaku sempat menjadi tahanan pada 2014. Iwan Sumarno pernah divonis 7 tahun penjara 
                                dalam kasus pencabulan anak."Dimana tahun 2014, bahwa Iwan Sumarno alias Jakcy tersangkut permasalahan hukum di Pengadilan Jakarta Utara, 
                                dimana yang bersangkutan di pidana dalam kasus pencabulan terhadap anak di bawah umur dengan vonis penjara, diperkirakan baru 2021 
                                yang bersangkutan selesai (dipenjara)," katanya.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Latest;