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
  // Form kontak: bikin form gratis di https://formspree.io, lalu ganti ID di bawah.
  // Selama masih 'xxxxxxxx', form otomatis fallback ke buka aplikasi email (mailto).
  formspree: 'https://formspree.io/f/xxxxxxxx',
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
    blurb:
      'Sistem Informasi Akademik Universitas, modul dosen (BKD, PAK, pengabdian). Frontend React, backend Laravel.',
    tags: ['React', 'Laravel', 'Sistem Informasi'],
    href: 'https://sia.trisuladana.com/',
  },
  {
    title: 'Rongsokin',
    blurb: 'Aplikasi jual-beli barang rongsok / daur ulang. Dibangun pakai Flutter.',
    tags: ['Flutter', 'Dart', 'Mobile'],
    href: 'https://rongsokin.vercel.app/',
  },
  {
    title: 'E2E Testing Suite',
    blurb:
      'Automation testing modul dosen pakai Java + Selenium + Cucumber + Page Object Model. 21/21 skenario PASS.',
    tags: ['Selenium', 'Cucumber', 'Java'],
    href: '#',
  },
  {
    title: 'This Portfolio',
    blurb:
      'Website ini sendiri. Porto bergaya culture biru/cream Y2K, bintang 3D, dan data live dari GitHub. React Three Fiber.',
    tags: ['React', 'R3F', 'Design'],
    href: '#',
  },
]
