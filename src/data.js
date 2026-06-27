// Konten porto Abel. Edit di sini buat ganti.
export const profile = {
  name: 'Muhammad Abel Abhinaya',
  short: 'ABEL',
  role: 'Frontend Developer',
  username: 'muhamadabel', // GitHub
  location: 'Indonesia',
  email: 'muhamadabelugm@gmail.com',
  tagline: 'Rapi di kode, rapi di tampilan.',
  about: [
    'Frontend developer yang suka memperhatikan detail sampai rapi. Sehari-hari memakai React, Next.js, dan Laravel untuk membangun sistem yang nyaman dipakai dan mudah dirawat.',
    'Saat ini sedang mendalami automated testing dengan Selenium dan Cucumber supaya setiap rilis lebih terjaga. Buat saya, hal kecil seperti micro-interaction, loading state, dan pesan error yang jelas itulah yang membuat sebuah web terasa berbeda.',
  ],
  focus: [
    'Membangun sistem informasi web (React, Next.js, Laravel)',
    'Automated end-to-end testing (Selenium, Cucumber)',
    'Mendalami UI/UX, accessibility, dan arsitektur frontend',
    'Membuat antarmuka yang rapi tapi tetap ringan',
  ],
  facts: [
    { value: '3+', label: 'Tahun ngoding' },
    { value: '10+', label: 'Project digarap' },
    { value: '21', label: 'Lucky number' },
  ],
  // Tombol Download CV: taruh file di public/cv.pdf lalu set '/cv.pdf',
  // atau pakai link Google Drive. Kosongin '' kalau belum ada (tombol disembunyiin).
  cvUrl: '',
  // Form kontak pakai FormSubmit (tanpa daftar). Pesan masuk ke email di bawah.
  // PENTING: submit pertama kali bakal ngirim email konfirmasi ke inbox kamu,
  // klik link "Activate Form" sekali, setelah itu semua pesan otomatis masuk.
  formEndpoint: 'https://formsubmit.co/ajax/muhamadabelugm@gmail.com',
  socials: [
    { label: 'GitHub', handle: '@muhamadabel', href: 'https://github.com/muhamadabel' },
    {
      label: 'LinkedIn',
      handle: 'Muhammad Abel Abhinaya',
      href: 'https://www.linkedin.com/in/muhammad-abel-abhinaya-riananto-944376326/',
    },
    { label: 'Instagram', handle: '@mhmmdabel._', href: 'https://instagram.com/mhmmdabel._' },
    { label: 'Email', handle: 'muhamadabelugm@gmail.com', href: 'mailto:muhamadabelugm@gmail.com' },
  ],
}

export const stack = [
  { group: 'Languages', items: ['JavaScript', 'TypeScript', 'PHP', 'Java'] },
  { group: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS'] },
  { group: 'Backend', items: ['Laravel', 'Node.js'] },
  { group: 'Tools & Testing', items: ['Git', 'Figma', 'Selenium', 'Cucumber'] },
]

// flat list buat marquee
export const skills = [
  'React', 'Next.js', 'TypeScript', 'Laravel', 'Tailwind', 'Node.js',
  'Selenium', 'Cucumber', 'Figma', 'PHP', 'Java', 'Git',
]

// project unggulan (kurasi), di luar repo live dari GitHub
export const projects = [
  {
    title: 'SIA UGN',
    year: '2025',
    role: 'Frontend Developer',
    blurb:
      'Sistem Informasi Akademik Universitas, modul dosen (BKD, PAK, pengabdian). Frontend React, backend Laravel.',
    detail:
      'Sistem Informasi Akademik untuk universitas. Saya menggarap sisi frontend untuk modul dosen: Beban Kerja Dosen (BKD), Penilaian Angka Kredit (PAK), dan pengabdian. Frontend dibangun dengan React dan terhubung ke backend Laravel lewat REST API.',
    highlights: [
      'Modul dosen: BKD, PAK, dan pengabdian',
      'Integrasi REST API ke backend Laravel',
      'Fokus ke form panjang yang tetap rapi dan enak diisi',
    ],
    tags: ['React', 'Laravel', 'Sistem Informasi'],
    href: 'https://sia.trisuladana.com/',
  },
  {
    title: 'Rongsokin',
    year: '2025',
    role: 'Mobile Developer',
    blurb: 'Aplikasi jual-beli barang rongsok / daur ulang. Dibangun pakai Flutter.',
    detail:
      'Aplikasi jual-beli barang rongsok dan daur ulang. Dibangun dengan Flutter, fokus ke tampilan yang bersih dan alur yang gampang dipahami pengguna.',
    highlights: [
      'Dibangun dengan Flutter (Dart)',
      'UI bersih dengan alur yang sederhana',
      'Versi web bisa diakses online',
    ],
    tags: ['Flutter', 'Dart', 'Mobile'],
    href: 'https://rongsokin.vercel.app/',
  },
  {
    title: 'E2E Testing Suite',
    year: '2025',
    role: 'QA / Automation',
    blurb:
      'Automation testing modul dosen pakai Java, Selenium, Cucumber, dan Page Object Model. 21/21 skenario PASS.',
    detail:
      'Automation testing untuk modul dosen memakai Java, Selenium, Cucumber, dan pola Page Object Model. Semua skenario yang dirancang lolos pengujian.',
    highlights: [
      'Java, Selenium, dan Cucumber',
      'Pola Page Object Model biar test rapi dan mudah dirawat',
      '21 dari 21 skenario PASS',
    ],
    tags: ['Selenium', 'Cucumber', 'Java'],
    href: '#',
  },
  {
    title: 'This Portfolio',
    year: '2026',
    role: 'Design + Build',
    blurb:
      'Website ini sendiri. Porto bergaya culture biru/cream Y2K, bintang 3D, dan data live dari GitHub. React Three Fiber.',
    detail:
      'Website ini sendiri. Bertema culture biru/cream Y2K dengan bintang 3D, dekor animasi, dan data yang ditarik langsung dari GitHub. Dibikin dari nol tanpa template.',
    highlights: [
      'React Three Fiber untuk elemen 3D',
      'Data repo dan profil live dari GitHub API',
      'Font custom, parallax, kursor sparkle, dan tilt 3D',
    ],
    tags: ['React', 'R3F', 'Design'],
    href: '#',
  },
]
