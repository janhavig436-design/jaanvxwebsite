import React, { useState, useEffect } from 'react';
import { 
  Search, Bookmark, Moon, Sun, Menu, X, Clock, Heart, 
  Sparkles, Send, ArrowRight, Share2, MessageSquare, Trash2, CheckCircle2, Feather, Flame, Copy, Check, ExternalLink, Globe
} from 'lucide-react';

interface Author {
  name: string;
  avatar: string;
}

interface Comment {
  name: string;
  date: string;
  text: string;
}

interface Article {
  id: number;
  title: string;
  category: string;
  slug: string;
  featured: boolean;
  image: string;
  date: string;
  readTime: string;
  author: Author;
  likes: number;
  excerpt: string;
  content: string;
  comments: Comment[];
}

interface CategorySEO {
  name: string;
  path: string;
  desc: string;
  title: string;
  metaDesc: string;
  charCount: number;
}

const CATEGORIES: CategorySEO[] = [
  { 
    name: 'All', 
    path: '#/', 
    desc: 'Editorial Home & Latest Stories', 
    title: 'Vogue & Velvet: Luxury Fashion & Pastel Lifestyle Journal',
    metaDesc: 'Explore Vogue & Velvet, your premier luxury fashion & pastel lifestyle journal. Discover chic editorial trends, clean skincare guides, and mindful living inspiration.',
    charCount: 160
  },
  { 
    name: 'Fashion', 
    path: '#/fashion', 
    desc: 'Copenhagen Street Style & Tailored Pastels', 
    title: 'Fashion Trends & Nordic Style Guide | Vogue & Velvet',
    metaDesc: 'Explore the latest fashion trends and Nordic style guides. Discover oversized pastel blazers, Copenhagen streetwear, and sustainable thrift-flipping tips.',
    charCount: 157
  },
  { 
    name: 'Beauty', 
    path: '#/beauty', 
    desc: 'Skin Cycling, Slugging & Clean Cosmetics', 
    title: 'Beauty Secrets & Skin Cycling Guide | Vogue & Velvet',
    metaDesc: 'Discover insider beauty secrets and skin cycling guides. Learn dermatologist-backed barrier repair, slugging routines, and clean cosmetic trends.',
    charCount: 153
  },
  { 
    name: 'Lifestyle', 
    path: '#/lifestyle', 
    desc: 'Pastel Room Aesthetics & Sanctuary Design', 
    title: 'Lifestyle Sanctuary & Pastel Decor | Vogue & Velvet',
    metaDesc: 'Curate your lifestyle sanctuary with pastel room decor, cloud mirrors, and aesthetic ambient lighting ideas designed to transform your personal living space.',
    charCount: 157
  },
  { 
    name: 'Wellness', 
    path: '#/wellness', 
    desc: 'Matcha Rituals & Slow Living Mindfulness', 
    title: 'Wellness Rituals & Slow Living Guide | Vogue & Velvet',
    metaDesc: 'Embrace holistic wellness rituals and slow living. Master ceremonial-grade matcha preparation, morning gratitude routines, and digital burnout recovery.',
    charCount: 159
  },
  { 
    name: 'Style', 
    path: '#/style', 
    desc: 'Vintage Thrift Flipping & Y2K Revival', 
    title: 'Personal Style & Thrift Flipping | Vogue & Velvet',
    metaDesc: 'Elevate your personal style with sustainable Y2K fashion upcycling, vintage thrift-flipping tutorials, and modern monochromatic makeup inspiration.',
    charCount: 153
  }
];

const INITIAL_BLOGS: Article[] = [
  {
    id: 1,
    title: "The Copenhagen Street Style Playbook: Oversized Blazers & Pastel Tailoring",
    category: "Fashion",
    slug: "copenhagen-street-style-playbook",
    featured: true,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=50",
    date: "Oct 12, 2026",
    readTime: "11 min read",
    author: {
      name: "Chloe V.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=50"
    },
    likes: 482,
    excerpt: "An exhaustive masterclass on mastering the Nordic nonchalant aesthetic with oversized pastel blazers, slouchy denim, chunky loafers, and TikTok-approved layering techniques.",
    content: `
      <h1 class="font-serif text-3xl font-semibold italic mb-4">The Copenhagen Street Style Playbook: Oversized Blazers & Pastel Tailoring</h1>
      <p class="lead font-serif text-lg italic text-[#9D79B5] dark:text-[#D8B4FE]">Copenhagen fashion week proved one undeniable truth: effortless tailoring meets pastel dreams is the ultimate uniform for the modern romantic.</p>
      
      <p>If your Pinterest board is currently drowning in oversized butter-yellow blazers, slouchy mom jeans, pastel knit balaclavas, and whimsical statement bags, you are already halfway to nailing the Nordic street style aesthetic. Scandinavian fashion has long championed functional minimalism, but in recent seasons, Copenhagen tastemakers have infused vibrant pastel hues and playful proportions into their wardrobe staples, sparking a global movement.</p>
      
      <h2 class="font-serif text-2xl font-semibold mt-8 mb-3">What makes Copenhagen street style so effortlessly distinct?</h2>
      <p>Copenhagen street style is defined by an uncompromising fusion of structured Nordic tailoring and playful pastel nonchalance. By intentionally clashing oversized silhouettes with high-low footwear and unexpected accessories, Scandinavian tastemakers create looks that feel both editorial and inherently wearable.</p>
      
      <h3 class="font-serif text-xl font-semibold mt-6 mb-2">1. The Architecture of the Oversized Pastel Blazer</h3>
      <p>Gone are the days of stiff, corporate, perfectly fitted blazers. Tastemakers and Scandinavian influencers are actively swapping neutrals for buttery cream, lavender, and mint silhouettes that drape effortlessly over graphic baby tees or ribbed tank tops. The secret lies in the shoulder seam: look for blazers that extend two to three inches past your natural shoulder line, creating that coveted slouchy, borrowed-from-the-boys silhouette.</p>
      
      <h3 class="font-serif text-xl font-semibold mt-6 mb-2">2. Footwear & Accessories: High-Low Juxtaposition</h3>
      <p>Nordic fashion thrives on unexpected pairings. You will rarely catch a Copenhagen style icon in head-to-toe polished heels. Instead, they pair baggy thrifted cargos with sleek ballet flats or chunky platform loafers. Accessories are treated as storytelling devices: layer chunky silver charm necklaces, add rimless tinted sunglasses, and wear over-ear headphones as a functional hair accessory.</p>
      
      <blockquote class="border-l-2 border-[#9D79B5] pl-4 italic text-[#6B5B6E] dark:text-purple-200 my-4">"Fashion is what you're offered four times a year by designers. Style is what you choose to make of your own narrative." — Lauren Hutton</blockquote>

      <h2 class="font-serif text-2xl font-semibold mt-8 mb-3">How can you build a sustainable Nordic capsule wardrobe?</h2>
      <p>Building a sustainable capsule wardrobe requires prioritizing timeless deadstock fabrics, vintage tailoring, and high-frequency rewears over transient micro-trends. Below is a quick comparison of traditional fast-fashion styling versus sustainable Nordic curation:</p>

      <div class="overflow-x-auto my-6">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-purple-200 dark:border-gray-700 bg-purple-50 dark:bg-[#252033]">
              <th class="p-3 font-semibold">Wardrobe Pillar</th>
              <th class="p-3 font-semibold">Fast Fashion Approach</th>
              <th class="p-3 font-semibold">Sustainable Nordic Approach</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-purple-100 dark:divide-gray-800">
            <tr>
              <td class="p-3 font-medium">Outerwear</td>
              <td class="p-3">Synthetic PU leather blazers</td>
              <td class="p-3">Thrifting 90s deadstock wool coats</td>
            </tr>
            <tr>
              <td class="p-3 font-medium">Proportions</td>
              <td class="p-3">Fitted, restrictive silhouettes</td>
              <td class="p-3">Oversized tailoring & layered knits</td>
            </tr>
            <tr>
              <td class="p-3 font-medium">Color Palette</td>
              <td class="p-3">Neon micro-trends</td>
              <td class="p-3">Butter yellow, lavender & mint pastels</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 class="font-serif text-xl font-semibold mt-6 mb-2">Key Takeaways for Your Next Outfit</h3>
      <ul class="list-disc pl-5 space-y-2 text-xs sm:text-sm">
        <li>Size up two to three sizes when purchasing blazers or trench coats for an authentic Copenhagen drape.</li>
        <li>Pair delicate pastel slip dresses with chunky platform loafers or retro sneakers.</li>
        <li>Invert rigid color rules by pairing buttery cream trousers with pastel mint knitwear.</li>
      </ul>
    `,
    comments: [
      { name: "Mia L.", date: "Oct 13, 2026", text: "The pastel blazer combo is literally my entire Pinterest feed right now! Obsessed with this deep dive." }
    ]
  },
  {
    id: 2,
    title: "Skin Cycling & Slugging 101: The Ultimate Skincare & Barrier Repair Guide",
    category: "Beauty",
    slug: "skin-cycling-slugging-guide",
    featured: false,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=50",
    date: "Oct 10, 2026",
    readTime: "10 min read",
    author: {
      name: "Maya S.",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=50"
    },
    likes: 512,
    excerpt: "Stop wrecking your skin barrier with harsh, overlapping chemical actives. Here is the ultimate dermatologist-backed guide to skin cycling, barrier health, and slugging for glassy dewy skin.",
    content: `
      <h1 class="font-serif text-3xl font-semibold italic mb-4">Skin Cycling & Slugging 101: The Ultimate Skincare & Barrier Repair Guide</h1>
      <p class="lead font-serif text-lg italic text-[#9D79B5] dark:text-[#D8B4FE]">If your skincare vanity looks like a chemical laboratory and your skin feels perpetually tight, stinging, and irritated, it is time to embrace skin cycling.</p>
      
      <p>Popularized by board-certified dermatologist Dr. Whitney Bowe, skin cycling is a structured 4-night rotational routine designed to maximize the efficacy of powerful active ingredients while giving your skin barrier adequate recovery time to regenerate and heal.</p>

      <h2 class="font-serif text-2xl font-semibold mt-8 mb-3">Why is skin cycling essential for barrier health?</h2>
      <p>Skin cycling prevents irritation and micro-tears by eliminating the chaotic daily layering of harsh acids and retinoids. By alternating between exfoliation, retinoid application, and dedicated recovery nights, skin achieves maximum radiance without barrier compromise.</p>

      <h3 class="font-serif text-xl font-semibold mt-6 mb-2">The 4-Night Rotation Blueprint</h3>
      <ul class="list-disc pl-5 space-y-2 text-xs sm:text-sm">
        <li><strong>Night 1 (Exfoliation):</strong> Apply glycolic, lactic, or salicylic acid on dry skin to clear dead cell buildup.</li>
        <li><strong>Night 2 (Retinoids):</strong> Apply retinol or prescription tretinoin to stimulate collagen synthesis.</li>
        <li><strong>Nights 3 & 4 (Recovery):</strong> Pause all actives; nourish with hyaluronic acid, ceramides, and facial oils.</li>
      </ul>

      <h2 class="font-serif text-2xl font-semibold mt-8 mb-3">What is slugging and how does it lock in moisture?</h2>
      <p>Slugging is the overnight practice of sealing your evening skincare routine with an occlusive balm (such as petroleum jelly or healing ointments) to prevent transepidermal water loss. This creates a protective shield that locks in hydrators while you sleep, resulting in ultra-dewy morning skin.</p>
    `,
    comments: [
      { name: "Chloe R.", date: "Oct 11, 2026", text: "Skin cycling saved my skin barrier after years of over-exfoliating with harsh scrubs!" }
    ]
  },
  {
    id: 3,
    title: "Pinterest Board IRL: Curating Your Dream Soft-Pastel Room Aesthetic & Sanctuary",
    category: "Lifestyle",
    slug: "pinterest-pastel-room-aesthetic",
    featured: false,
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=50",
    date: "Oct 08, 2026",
    readTime: "9 min read",
    author: {
      name: "Hana N.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=50"
    },
    likes: 384,
    excerpt: "Transform your bedroom and living space into a calming pastel dreamscape using cloud mirrors, LED sunset lamps, waffle knits, and dedicated matcha station corners.",
    content: `
      <h1 class="font-serif text-3xl font-semibold italic mb-4">Pinterest Board IRL: Curating Your Dream Soft-Pastel Room Aesthetic & Sanctuary</h1>
      <p class="lead font-serif text-lg italic text-[#9D79B5] dark:text-[#D8B4FE]">Your physical environment directly dictates your mental serenity. Transforming a chaotic room into a serene pastel sanctuary is the ultimate self-care ritual.</p>

      <p>Interior design has pivoted away from stark industrial minimalism and sterile greys, leaning heavily into tactile warmth, whimsical curves, and soothing pastel color palettes. Whether you are living in a compact student dorm or a city apartment, creating a cozy aesthetic haven is entirely achievable with intentional curation.</p>

      <h2 class="font-serif text-2xl font-semibold mt-8 mb-3">How do you master lighting layers for a serene atmosphere?</h2>
      <p>Mastering lighting layers requires completely eliminating harsh overhead fluorescent fixtures in favor of warm, diffuse ambient sources. By combining pleated table lamps, glowing orb lights, and LED sunset lamps, you instantly create an ethereal, relaxing sanctuary.</p>

      <h3 class="font-serif text-xl font-semibold mt-6 mb-2">Essential Decor Elements</h3>
      <ul class="list-disc pl-5 space-y-2 text-xs sm:text-sm">
        <li>Asymmetric cloud mirrors that reflect natural light and create organic visual softness.</li>
        <li>Textured waffle knit throws in butter cream and dusty lavender.</li>
        <li>A dedicated ceramic coffee or matcha station corner with warm wood shelving.</li>
      </ul>
    `,
    comments: []
  },
  {
    id: 4,
    title: "Matcha Lattes & Morning Gratitude: Slow Living Rituals in a Hyper-Connected World",
    category: "Wellness",
    slug: "matcha-lattes-slow-living",
    featured: false,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=50",
    date: "Oct 05, 2026",
    readTime: "9 min read",
    author: {
      name: "Dr. Clara V.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=50"
    },
    likes: 620,
    excerpt: "How mindful morning rituals, ceremonial grade matcha, breathwork, and strict phone-free hours are curing digital burnout and anxiety.",
    content: `
      <h1 class="font-serif text-3xl font-semibold italic mb-4">Matcha Lattes & Morning Gratitude: Slow Living Rituals in a Hyper-Connected World</h1>
      <p class="lead font-serif text-lg italic text-[#9D79B5] dark:text-[#D8B4FE]">In a society addicted to notification pings and infinite scroll, reclaiming your quiet morning hours is the ultimate rebellion.</p>

      <p>Digital burnout has reached an all-time high, prompting a massive cultural shift toward slow living. Instead of waking up and immediately subjecting your nervous system to work emails and social media doom-scrolling, mindful individuals are establishing sacred morning boundaries.</p>

      <h2 class="font-serif text-2xl font-semibold mt-8 mb-3">Why are morning matcha rituals replacing hurried coffee runs?</h2>
      <p>Morning matcha rituals replace caffeinated jitters with sustained, calm alertness thanks to the synergistic blend of L-theanine and gentle caffeine. Whisking ceremonial-grade green tea provides a tactile, meditative anchor that grounds the nervous system before screen exposure.</p>

      <h3 class="font-serif text-xl font-semibold mt-6 mb-2">The 60-Minute Digital Sunrise</h3>
      <p>Avoid touching your smartphone for the first 60 minutes after waking up. This crucial boundary allows cortisol levels to regulate naturally without artificial spikes. Replace screen time with somatic stretching, journaling, and mindful sipping.</p>
    `,
    comments: [
      { name: "Sam P.", date: "Oct 06, 2026", text: "Switching from coffee to iced oat matcha was a game changer for my morning anxiety." }
    ]
  },
  {
    id: 5,
    title: "Vintage Thrift Flipping: How to Upcycle 90s Deadstock Into Runway-Ready Pieces",
    category: "Style",
    slug: "vintage-thrift-flipping-upcycle",
    featured: false,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=50",
    date: "Oct 02, 2026",
    readTime: "10 min read",
    author: {
      name: "Chloe V.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=50"
    },
    likes: 410,
    excerpt: "Turn thrift store oversized blazers and men's button-downs into custom Y2K corset tops, lace-up details, and asymmetric skirts with zero waste.",
    content: `
      <h1 class="font-serif text-3xl font-semibold italic mb-4">Vintage Thrift Flipping: How to Upcycle 90s Deadstock Into Runway-Ready Pieces</h1>
      <p class="lead font-serif text-lg italic text-[#9D79B5] dark:text-[#D8B4FE]">Fast fashion is officially out; sustainable thrift flipping and DIY upcycling represent the pinnacle of modern personal style.</p>

      <p>Why buy mass-produced clothes from mega-retailers when you can create one-of-a-kind designer pieces from thrift store racks? With fabric shears, pastel ribbons, and basic sewing skills, you can breathe new life into forgotten garments.</p>

      <h2 class="font-serif text-2xl font-semibold mt-8 mb-3">How can beginners start upcycling vintage garments?</h2>
      <p>Beginners can start upcycling by converting oversized men's button-down shirts into lace-up corset tops or transforming pleated midi skirts into Y2K low-rise miniskirts. These beginner projects require minimal sewing experience while delivering high-fashion custom results.</p>

      <h3 class="font-serif text-xl font-semibold mt-6 mb-2">Top 3 Beginner Upcycle Projects</h3>
      <ul class="list-disc pl-5 space-y-2 text-xs sm:text-sm">
        <li><strong>The Corset Shirt:</strong> Add metal eyelets and pastel ribbons to the back of a thrifted Oxford shirt.</li>
        <li><strong>Asymmetric Hemming:</strong> Cut and restitch vintage skirts for a modern diagonal drape.</li>
        <li><strong>Ribbon Straps:</strong> Replace plain camisole straps with delicate satin bows.</li>
      </ul>
    `,
    comments: []
  },
  {
    id: 6,
    title: "Clean Girl Makeup Meets Soft Grunge: The Modern Beauty Paradox & Aesthetic",
    category: "Beauty",
    slug: "clean-girl-makeup-soft-grunge",
    featured: false,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=50",
    date: "Sep 28, 2026",
    readTime: "8 min read",
    author: {
      name: "Maya S.",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=50"
    },
    likes: 360,
    excerpt: "Blending dewy glazed skin and laminated brows with smudged espresso eyeliner and glossy plum lips for the ultimate moody beauty paradox.",
    content: `
      <h1 class="font-serif text-3xl font-semibold italic mb-4">Clean Girl Makeup Meets Soft Grunge: The Modern Beauty Paradox & Aesthetic</h1>
      <p class="lead font-serif text-lg italic text-[#9D79B5] dark:text-[#D8B4FE]">The clean girl aesthetic has matured. We are now marrying glowing, featherlight skin with sultry 90s grunge eyes and espresso lips.</p>

      <p>This hybrid beauty trend allows you to enjoy the best of both worlds: skin that looks hydrated, fresh, and breathable paired with high-impact smudged eyeliner and deep berry tones that add instant attitude.</p>

      <h2 class="font-serif text-2xl font-semibold mt-8 mb-3">How do you balance glowing skin with moody 90s grunge?</h2>
      <p>You balance glowing skin with moody grunge by keeping your complexion exceptionally dewy and minimalist while concentrating high-contrast drama solely on the eyes and lips. This juxtaposition prevents the look from feeling heavy while retaining a striking edge.</p>

      <h3 class="font-serif text-xl font-semibold mt-6 mb-2">Key Product Combinations</h3>
      <ul class="list-disc pl-5 space-y-2 text-xs sm:text-sm">
        <li>Glass-skin tinted moisturizer paired with smudged espresso gel eyeliner.</li>
        <li>Laminated brows combined with a high-shine plumping plum lip gloss.</li>
      </ul>
    `,
    comments: []
  }
];

export default function App() {
  const [blogs, setBlogs] = useState<Article[]>(INITIAL_BLOGS);
  const [currentCategory, setCurrentCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedArticleId, setSelectedArticleId] = useState<number | null>(null);
  const selectedArticle = blogs.find(b => b.id === selectedArticleId);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  
  const [savedIds, setSavedIds] = useState<number[]>(() => {
    try { return JSON.parse(localStorage.getItem('vv_saved_articles') || '[]'); } catch { return []; }
  });
  const [likedIds, setLikedIds] = useState<number[]>(() => {
    try { return JSON.parse(localStorage.getItem('vv_liked_articles') || '[]'); } catch { return []; }
  });
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('vv_theme') === 'dark' || (!('vv_theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState<boolean>(false);
  const [isAiModalOpen, setIsAiModalOpen] = useState<boolean>(false);
  const [isClassificationModalOpen, setIsClassificationModalOpen] = useState<boolean>(false);
  const [isSeoHubOpen, setIsSeoHubOpen] = useState<boolean>(false);

  // AI Advisor state
  const [aiMode, setAiMode] = useState<'style' | 'skincare' | 'outfit'>('style');
  const [aiPrompt, setAiPrompt] = useState<string>('');
  const [aiLoading, setAiLoading] = useState<boolean>(false);
  const [aiResponse, setAiResponse] = useState<string>('');

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState<string>('');
  const [newsletterSuccess, setNewsletterSuccess] = useState<boolean>(false);

  // Comment state
  const [commentName, setCommentName] = useState<string>('');
  const [commentEmail, setCommentEmail] = useState<string>('');
  const [commentText, setCommentText] = useState<string>('');

  // Update document.title & meta description when article modal opens or category changes
  useEffect(() => {
    let metaTag = document.querySelector('meta[name="description"]');
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute('name', 'description');
      document.head.appendChild(metaTag);
    }

    if (selectedArticle) {
      document.title = `${selectedArticle.title.substring(0, 48)} | Vogue & Velvet`;
      const desc = `${selectedArticle.excerpt} Read the full editorial feature on Vogue & Velvet.`;
      metaTag.setAttribute('content', desc);
    } else {
      const catObj = CATEGORIES.find(c => c.name === currentCategory) || CATEGORIES[0];
      document.title = catObj.title;
      metaTag.setAttribute('content', catObj.metaDesc);
    }
  }, [selectedArticle, currentCategory]);

  // Open a different tab on the browser every time a classification is chosen
  const handleClassificationClick = (catName: string, path: string) => {
    const fullUrl = `${window.location.origin}${window.location.pathname}${path}`;
    window.open(fullUrl, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('vv_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('vv_theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem('vv_saved_articles', JSON.stringify(savedIds));
  }, [savedIds]);

  useEffect(() => {
    localStorage.setItem('vv_liked_articles', JSON.stringify(likedIds));
  }, [likedIds]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const toggleSave = (id: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSavedIds(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };

  const toggleLike = (id: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const isLiked = likedIds.includes(id);
    setLikedIds(prev => isLiked ? prev.filter(i => i !== id) : [...prev, id]);
    setBlogs(prev => prev.map(b => b.id === id ? { ...b, likes: isLiked ? b.likes - 1 : b.likes + 1 } : b));
  };

  const filteredBlogs = blogs.filter(blog => {
    const matchesCat = currentCategory === 'All' || blog.category.toLowerCase() === currentCategory.toLowerCase();
    const matchesSearch = searchQuery === '' || 
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const featuredBlog = blogs.find(b => b.featured) || blogs[0];

  const copyCategoryUrl = (path: string, name: string) => {
    const fullUrl = `${window.location.origin}${window.location.pathname}${path}`;
    navigator.clipboard.writeText(fullUrl);
    setCopiedUrl(name);
    setTimeout(() => setCopiedUrl(null), 3000);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedArticleId || !commentName.trim() || !commentText.trim()) return;

    setBlogs(prev => prev.map(blog => {
      if (blog.id === selectedArticleId) {
        return {
          ...blog,
          comments: [
            { name: commentName.trim(), date: "Just now", text: commentText.trim() },
            ...blog.comments
          ]
        };
      }
      return blog;
    }));

    setCommentName('');
    setCommentEmail('');
    setCommentText('');
  };

  const handleAiConsult = async (customPrompt?: string) => {
    const promptToSend = customPrompt || aiPrompt;
    if (!promptToSend.trim()) return;

    setAiLoading(true);
    setAiResponse('');

    try {
      const res = await fetch('/api/ai-consult', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: promptToSend, mode: aiMode })
      });
      const data = await res.json();
      if (data.error) {
        setAiResponse(`Error: ${data.error}`);
      } else {
        setAiResponse(data.result);
      }
    } catch (err: any) {
      setAiResponse('Failed to connect to AI Advisor. Please verify server connection.');
    } finally {
      setAiLoading(false);
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSuccess(true);
    setNewsletterEmail('');
    setTimeout(() => setNewsletterSuccess(false), 5000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFBFB] dark:bg-[#1A1622] text-[#4A3B4C] dark:text-[#F3E8FF] transition-colors duration-300">
      
      {/* Top Chic Pastel Banner */}
      <div className="bg-gradient-to-r from-[#FCE7F3] via-[#EDE9FE] to-[#DCFCE7] text-[#4A3B4C] text-[11px] py-2 text-center tracking-widest uppercase font-medium shadow-xs transition-colors flex items-center justify-center space-x-3" role="region" aria-label="Announcement banner">
        <Sparkles className="w-3.5 h-3.5 text-[#9D79B5]" aria-hidden="true" />
        <span>Optimized Images Under 100KB (Web Optimized) — <button onClick={() => setIsSeoHubOpen(true)} className="underline hover:text-[#7C3AED] font-semibold" aria-label="View SEO Inspector Hub">View SEO Inspector Hub</button></span>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-[#FFFBFB]/90 dark:bg-[#1A1622]/90 border-b border-[#F7F2F7] dark:border-[#2D263B] backdrop-blur-md transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Desktop Nav with Descriptive Accessible Anchor Text & New Tab Opening */}
            <nav className="hidden md:flex space-x-5 text-xs font-medium tracking-widest uppercase items-center" aria-label="Main Editorial Classifications">
              {CATEGORIES.map(cat => (
                <button 
                  key={cat.name}
                  onClick={() => handleClassificationClick(cat.name, cat.path)}
                  className="hover:text-[#9D79B5] transition-colors flex items-center space-x-1 cursor-pointer py-2"
                  aria-label={`Open ${cat.name === 'All' ? 'Home Editorial' : cat.name + ' Editorial'} classification in a new browser tab`}
                >
                  <span>{cat.name === 'All' ? 'Home' : cat.name}</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-60" aria-hidden="true" />
                </button>
              ))}
            </nav>

            {/* Editorial Logo */}
            <div className="flex-1 md:flex-none text-center">
              <button 
                onClick={() => handleClassificationClick('All', '#/')} 
                className="font-serif text-2xl sm:text-3xl lg:text-4xl tracking-tight font-semibold italic hover:opacity-90 transition-opacity"
                aria-label="Vogue and Velvet Home - Open in new browser tab"
              >
                Vogue <span className="text-[#9D79B5] font-normal">&amp;</span> Velvet
              </button>
            </div>

            {/* Right Utility Bar */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* SEO Inspector Hub Button */}
              <button 
                onClick={() => setIsSeoHubOpen(true)}
                className="hidden lg:flex items-center space-x-1.5 text-xs bg-[#EDE9FE] hover:bg-[#DDD6FE] text-[#5B21B6] dark:bg-[#2D263B] dark:text-[#E9D5FF] px-3.5 py-2 rounded-full font-medium tracking-wider uppercase transition-all border border-[#DDD6FE] dark:border-purple-800"
                aria-label="Inspect SEO Metadata and Page Title Tags"
              >
                <Globe className="w-3.5 h-3.5" aria-hidden="true" />
                <span>SEO Inspector</span>
              </button>

              {/* Classification Hub Button */}
              <button 
                onClick={() => setIsClassificationModalOpen(true)}
                className="hidden lg:flex items-center space-x-1.5 text-xs bg-[#FCE7F3] hover:bg-[#FBCFE8] text-[#831843] dark:bg-[#2D263B] dark:text-[#E9D5FF] px-3.5 py-2 rounded-full font-medium tracking-wider uppercase transition-all border border-[#FBCFE8] dark:border-purple-800"
                aria-label="Open Classification Unique URLs Hub"
              >
                <Share2 className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Unique URLs</span>
              </button>

              {/* AI Vibe Stylist Button */}
              <button 
                onClick={() => setIsAiModalOpen(true)}
                className="hidden sm:flex items-center space-x-1.5 text-xs bg-[#FDF2F4] hover:bg-[#FBCFE8] text-[#831843] dark:bg-[#2D263B] dark:text-[#E9D5FF] px-3.5 py-2 rounded-full font-medium tracking-wider uppercase transition-all border border-[#FBCFE8] dark:border-purple-800"
                aria-label="Open AI Chic Vibe Stylist Assistant"
              >
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                <span>AI Stylist</span>
              </button>

              {/* Search Field */}
              <div className="relative hidden sm:block">
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search aesthetics..." 
                  aria-label="Search editorial articles and aesthetics"
                  className="bg-[#FDF2F4] dark:bg-[#2D263B] text-xs rounded-full py-2 pl-9 pr-4 w-32 lg:w-40 focus:outline-none focus:ring-1 focus:ring-[#9D79B5] transition-all border border-transparent dark:border-gray-700"
                />
                <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-gray-400" aria-hidden="true" />
              </div>

              {/* Bookmarks Toggle */}
              <button onClick={() => setIsSavedDrawerOpen(true)} className="p-2 rounded-full hover:bg-[#FDF2F4] dark:hover:bg-[#2D263B] transition-colors relative" aria-label="Open Saved Reading List drawer">
                <Bookmark className="w-5 h-5 text-[#9D79B5]" aria-hidden="true" />
                {savedIds.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#9D79B5] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {savedIds.length}
                  </span>
                )}
              </button>

              {/* Theme Switcher */}
              <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-[#FDF2F4] dark:hover:bg-[#2D263B] transition-colors" aria-label="Toggle dark or light mode theme">
                {isDarkMode ? <Sun className="w-5 h-5 text-amber-300" aria-hidden="true" /> : <Moon className="w-5 h-5 text-[#9D79B5]" aria-hidden="true" />}
              </button>

              {/* Mobile Menu Hamburger */}
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-[#FDF2F4] dark:hover:bg-[#2D263B]" aria-label="Open mobile navigation menu">
                <Menu className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search & Menu */}
        <div className="sm:hidden px-4 pb-3">
          <div className="relative">
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search editorial stories..." 
              aria-label="Search editorial stories mobile input"
              className="w-full bg-[#FDF2F4] dark:bg-[#2D263B] text-xs rounded-full py-2.5 pl-9 pr-4 focus:outline-none focus:ring-1 focus:ring-[#9D79B5] border border-transparent dark:border-gray-700"
            />
            <Search className="absolute left-3.5 top-3 w-3.5 h-3.5 text-gray-400" aria-hidden="true" />
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#FFFBFB] dark:bg-[#1A1622] border-b border-[#F7F2F7] dark:border-[#2D263B] px-4 py-4 space-y-3 text-center text-xs tracking-widest uppercase">
            <button onClick={() => { setIsSeoHubOpen(true); setIsMobileMenuOpen(false); }} className="w-full py-2 text-[#9D79B5] font-semibold flex items-center justify-center space-x-1" aria-label="Open SEO Inspector Modal">
              <Globe className="w-4 h-4" aria-hidden="true" /> <span>SEO Inspector</span>
            </button>
            <button onClick={() => { setIsClassificationModalOpen(true); setIsMobileMenuOpen(false); }} className="w-full py-2 text-[#9D79B5] font-semibold flex items-center justify-center space-x-1" aria-label="Open Unique URLs Hub Modal">
              <Share2 className="w-4 h-4" aria-hidden="true" /> <span>Unique URLs Hub</span>
            </button>
            <button onClick={() => { setIsAiModalOpen(true); setIsMobileMenuOpen(false); }} className="w-full py-2 text-[#9D79B5] font-semibold flex items-center justify-center space-x-1" aria-label="Open AI Vibe Stylist">
              <Sparkles className="w-4 h-4" aria-hidden="true" /> <span>AI Vibe Stylist</span>
            </button>
            {CATEGORIES.map(cat => (
              <button 
                key={cat.name} 
                onClick={() => { handleClassificationClick(cat.name, cat.path); setIsMobileMenuOpen(false); }} 
                className="block w-full py-2 hover:text-[#9D79B5] flex items-center justify-center space-x-1 cursor-pointer"
                aria-label={`Open ${cat.name} editorial classification in a new browser tab`}
              >
                <span>{cat.name === 'All' ? 'Home Editorial' : cat.name + ' Editorial'}</span> <ExternalLink className="w-2.5 h-2.5 opacity-60" aria-hidden="true" />
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Notice Banner */}
        <div className="mb-8 p-4 bg-[#FDF2F4] dark:bg-[#252033] rounded-2xl border border-[#F7F2F7] dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" role="region" aria-label="Image optimization notice">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#9D79B5] animate-pulse" aria-hidden="true"></span>
            <span>All editorial images optimized for web performance (&lt; 100KB with lossless compression &amp; referrerPolicy="no-referrer").</span>
          </div>
          <div className="flex space-x-2">
            <button 
              onClick={() => setIsClassificationModalOpen(true)}
              className="bg-[#9D79B5] hover:bg-[#7C3AED] text-white px-4 py-2 rounded-full font-medium tracking-wider uppercase transition-all shadow-xs flex items-center space-x-1 cursor-pointer"
              aria-label="Open Classification Unique URLs Hub"
            >
              <Share2 className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Explore Unique URLs Hub ↗</span>
            </button>
          </div>
        </div>

        {/* Hero Section */}
        {currentCategory === 'All' && !searchQuery && featuredBlog && (
          <section className="mb-14" aria-label="Featured Editorial Story">
            <div className="relative bg-white dark:bg-[#252033] rounded-3xl overflow-hidden border border-[#F7F2F7] dark:border-gray-800 shadow-xl group transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
                <div className="lg:col-span-7 relative overflow-hidden min-h-[300px] lg:min-h-full">
                  <img src={featuredBlog.image} alt={featuredBlog.title} referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-950/60 via-transparent lg:hidden" aria-hidden="true"></div>
                  <span className="absolute top-4 left-4 bg-[#9D79B5] text-white text-[10px] uppercase tracking-widest font-semibold px-3.5 py-1.5 rounded-full shadow">
                    Featured {featuredBlog.category} Story
                  </span>
                </div>

                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-xs text-gray-500 dark:text-purple-300">
                      <span>{featuredBlog.date}</span>
                      <span aria-hidden="true">•</span>
                      <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1" aria-hidden="true" /> {featuredBlog.readTime}</span>
                    </div>

                    <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold italic leading-tight group-hover:text-[#9D79B5] transition-colors cursor-pointer" onClick={() => setSelectedArticleId(featuredBlog.id)}>
                      {featuredBlog.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-gray-600 dark:text-purple-200/80 line-clamp-3 leading-relaxed">
                      {featuredBlog.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#F7F2F7] dark:border-gray-800 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img src={featuredBlog.author.avatar} alt={featuredBlog.author.name} referrerPolicy="no-referrer" className="w-9 h-9 rounded-full object-cover border border-[#9D79B5]" />
                      <span className="text-xs font-medium">{featuredBlog.author.name}</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button onClick={(e) => toggleSave(featuredBlog.id, e)} className="p-2.5 rounded-full hover:bg-[#FDF2F4] dark:hover:bg-[#1A1622] transition-colors" aria-label={`Bookmark ${featuredBlog.title}`}>
                        <Bookmark className={`w-4 h-4 ${savedIds.includes(featuredBlog.id) ? 'text-[#9D79B5] fill-current' : ''}`} aria-hidden="true" />
                      </button>
                      <button onClick={() => setSelectedArticleId(featuredBlog.id)} className="bg-[#4A3B4C] dark:bg-[#F3E8FF] text-[#FFFBFB] dark:text-[#4A3B4C] hover:bg-[#9D79B5] dark:hover:bg-[#9D79B5] dark:hover:text-white text-xs px-5 py-2.5 rounded-full font-medium tracking-wider uppercase transition-all shadow-xs" aria-label={`Read full featured story: ${featuredBlog.title}`}>
                        Read Featured Story
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Editorial Grid Section */}
        <section id="blogs-grid" className="scroll-mt-24" aria-label="Editorial Journal Classifications">
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#F7F2F7] dark:border-[#2D263B] pb-4 mb-8 gap-4">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold italic">Editorial Journal</h2>
              <p className="text-xs text-gray-500 dark:text-purple-300 mt-1">Choosing any category classification below opens it in a brand new browser tab</p>
            </div>

            {/* Category Pills - Each opens in a new tab with descriptive anchor text */}
            <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Classification New Tab Filters">
              {CATEGORIES.map(cat => (
                <button 
                  key={cat.name}
                  onClick={() => handleClassificationClick(cat.name, cat.path)}
                  className="text-xs px-4 py-2 rounded-full font-medium tracking-wider uppercase transition-all bg-[#FDF2F4] text-[#4A3B4C] dark:bg-[#252033] dark:text-purple-200 hover:bg-[#9D79B5] hover:text-white inline-flex items-center space-x-1 cursor-pointer"
                  aria-label={`Open ${cat.name === 'All' ? 'Home' : cat.name} classification editorial in a new browser tab`}
                >
                  <span>{cat.name === 'All' ? 'Home' : cat.name}</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-70" aria-hidden="true" />
                </button>
              ))}
            </div>
          </div>

          {/* Search Filter Notice */}
          {searchQuery && (
            <div className="mb-6 flex items-center justify-between bg-[#FCE7F3] text-[#831843] dark:bg-[#2D263B] dark:text-purple-300 px-4 py-2.5 rounded-xl text-xs" role="region" aria-label="Search filter results">
              <span>Filtered by query: <strong className="font-semibold">{searchQuery}</strong></span>
              <button onClick={() => setSearchQuery('')} className="underline hover:opacity-80" aria-label="Clear current search query">Reset Search</button>
            </div>
          )}

          {/* Cards Grid */}
          {filteredBlogs.length === 0 ? (
            <div className="text-center py-16">
              <Feather className="w-12 h-12 text-[#E9D5FF] dark:text-[#2D263B] mx-auto mb-3" aria-hidden="true" />
              <h3 className="font-serif text-xl font-semibold">No stories match your criteria</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Try tweaking your search term or exploring another category.</p>
              <button onClick={() => setSearchQuery('')} className="mt-4 text-xs bg-[#9D79B5] text-white px-5 py-2 rounded-full uppercase tracking-wider" aria-label="Clear search criteria">
                Clear Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map(blog => {
                const isSaved = savedIds.includes(blog.id);
                const isLiked = likedIds.includes(blog.id);
                const catObj = CATEGORIES.find(c => c.name.toLowerCase() === blog.category.toLowerCase()) || CATEGORIES[0];

                return (
                  <article key={blog.id} className="bg-white dark:bg-[#252033] rounded-3xl overflow-hidden border border-[#F7F2F7] dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                    <div>
                      <div className="relative aspect-[16/10] overflow-hidden cursor-pointer" onClick={() => setSelectedArticleId(blog.id)}>
                        <img src={blog.image} alt={blog.title} referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" />
                        <button 
                          onClick={(e) => { e.stopPropagation(); handleClassificationClick(catObj.name, catObj.path); }}
                          className="absolute top-3 left-3 bg-[#FFFBFB]/90 dark:bg-[#1A1622]/90 text-[#4A3B4C] dark:text-[#F3E8FF] text-[10px] uppercase font-semibold tracking-widest px-3 py-1 rounded-full backdrop-blur-sm hover:text-[#9D79B5] inline-flex items-center space-x-1"
                          aria-label={`Open ${blog.category} classification in a new browser tab`}
                        >
                          <span>{blog.category}</span>
                          <ExternalLink className="w-2 h-2 opacity-70" aria-hidden="true" />
                        </button>
                        <button onClick={(e) => toggleSave(blog.id, e)} className="absolute top-3 right-3 p-2 rounded-full bg-[#FFFBFB]/80 dark:bg-[#1A1622]/80 text-[#4A3B4C] dark:text-[#F3E8FF] hover:text-[#9D79B5] backdrop-blur-sm transition-colors" aria-label={`Bookmark article: ${blog.title}`}>
                          <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'text-[#9D79B5] fill-current' : ''}`} aria-hidden="true" />
                        </button>
                      </div>

                      <div className="p-6 space-y-3">
                        <div className="flex items-center justify-between text-[11px] text-gray-500 dark:text-purple-300">
                          <span>{blog.date}</span>
                          <span className="flex items-center"><Clock className="w-3 h-3 mr-1" aria-hidden="true" /> {blog.readTime}</span>
                        </div>

                        <h3 className="font-serif text-xl font-semibold italic leading-snug group-hover:text-[#9D79B5] transition-colors cursor-pointer" onClick={() => setSelectedArticleId(blog.id)}>
                          {blog.title}
                        </h3>

                        <p className="text-xs text-gray-600 dark:text-purple-200/80 line-clamp-2 leading-relaxed">
                          {blog.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 pb-6 pt-2 border-t border-[#F7F2F7] dark:border-gray-800 flex items-center justify-between text-xs">
                      <div className="flex items-center space-x-2">
                        <img src={blog.author.avatar} alt={blog.author.name} referrerPolicy="no-referrer" className="w-7 h-7 rounded-full object-cover border border-[#9D79B5]" />
                        <span className="font-medium text-gray-700 dark:text-gray-300 text-[11px]">{blog.author.name}</span>
                      </div>

                      <div className="flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                        <button onClick={(e) => toggleLike(blog.id, e)} className="hover:text-rose-500 transition-colors flex items-center space-x-1" aria-label={`Like article ${blog.title}, currently ${blog.likes} likes`}>
                          <Heart className={`w-4 h-4 ${isLiked ? 'text-rose-500 fill-current' : ''}`} aria-hidden="true" />
                          <span className="text-[11px]">{blog.likes}</span>
                        </button>
                        <button onClick={() => setSelectedArticleId(blog.id)} className="text-[#9D79B5] font-semibold hover:underline text-[11px] uppercase tracking-wider" aria-label={`Read full story: ${blog.title}`}>
                          Read Story →
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>

        {/* Newsletter Section */}
        <section className="my-16 bg-gradient-to-br from-[#FCE7F3] via-[#EDE9FE] to-[#DCFCE7] dark:from-[#252033] dark:to-[#2D263B] rounded-3xl p-8 md:p-12 text-center border border-[#F7F2F7] dark:border-gray-800 shadow-sm" aria-label="Newsletter Subscription">
          <div className="max-w-xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#7C3AED] dark:text-purple-300 font-semibold">The Velvet Club</span>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold italic">Chic Pastel Edits Delivered Weekly</h3>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-purple-200 leading-relaxed">
              Subscribe to receive tailored outfit moodboards, skincare cheat sheets, and room decor inspiration directly to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <input 
                type="email" 
                required 
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address" 
                aria-label="Email address for weekly newsletter subscription"
                className="w-full sm:flex-1 text-xs py-3.5 px-5 rounded-full bg-white dark:bg-[#1A1622] text-[#4A3B4C] dark:text-white border border-[#E8D8D0] dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-[#9D79B5]"
              />
              <button type="submit" className="w-full sm:w-auto bg-[#4A3B4C] dark:bg-[#F3E8FF] text-[#FFFBFB] dark:text-[#4A3B4C] hover:bg-[#9D79B5] dark:hover:bg-[#9D79B5] dark:hover:text-white text-xs font-medium uppercase tracking-widest px-8 py-3.5 rounded-full transition-all shadow-xs" aria-label="Subscribe to newsletter">
                Join Newsletter
              </button>
            </form>
            {newsletterSuccess && (
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium pt-1 flex items-center justify-center space-x-1.5" role="status">
                <CheckCircle2 className="w-4 h-4" aria-hidden="true" /> <span>Welcome! You are officially subscribed to Vogue &amp; Velvet.</span>
              </p>
            )}
          </div>
        </section>

      </main>

      {/* Footer with Audited Descriptive Anchor Text & New Tab Openers */}
      <footer className="bg-white dark:bg-[#252033] border-t border-[#F7F2F7] dark:border-gray-800 pt-12 pb-8 transition-colors" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-[#F7F2F7] dark:border-gray-800">
            <div className="md:col-span-2 space-y-4">
              <span className="font-serif text-2xl font-semibold italic">Vogue <span className="text-[#9D79B5]">&amp;</span> Velvet</span>
              <p className="text-xs text-gray-500 dark:text-purple-300 leading-relaxed max-w-sm">
                A modern digital publication dedicated to high fashion, conscious beauty rituals, wellness routines, and pastel aesthetic lifestyle design.
              </p>
              <div className="flex space-x-4 text-sm text-gray-500 dark:text-purple-300 pt-2" aria-label="Social media channels">
                <a href="#instagram" onClick={(e) => { e.preventDefault(); alert('Redirecting to Vogue & Velvet Instagram profile.'); }} className="hover:text-[#9D79B5] transition-colors" aria-label="Visit Vogue and Velvet Instagram Profile"><i className="fa-brands fa-instagram text-lg" aria-hidden="true"></i></a>
                <a href="#pinterest" onClick={(e) => { e.preventDefault(); alert('Redirecting to Vogue & Velvet Pinterest boards.'); }} className="hover:text-[#9D79B5] transition-colors" aria-label="Visit Vogue and Velvet Pinterest Boards"><i className="fa-brands fa-pinterest text-lg" aria-hidden="true"></i></a>
                <a href="#tiktok" onClick={(e) => { e.preventDefault(); alert('Redirecting to Vogue & Velvet TikTok channel.'); }} className="hover:text-[#9D79B5] transition-colors" aria-label="Visit Vogue and Velvet TikTok Channel"><i className="fa-brands fa-tiktok text-lg" aria-hidden="true"></i></a>
                <a href="#twitter" onClick={(e) => { e.preventDefault(); alert('Redirecting to Vogue & Velvet Twitter profile.'); }} className="hover:text-[#9D79B5] transition-colors" aria-label="Visit Vogue and Velvet Twitter Profile"><i className="fa-brands fa-x-twitter text-lg" aria-hidden="true"></i></a>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-[#9D79B5] mb-3">Classification New-Tab Openers</h4>
              <ul className="space-y-2 text-xs text-gray-500 dark:text-purple-300" aria-label="Footer Classification Links">
                {CATEGORIES.map(cat => (
                  <li key={cat.name}>
                    <button 
                      onClick={() => handleClassificationClick(cat.name, cat.path)} 
                      className="hover:text-[#9D79B5] flex items-center space-x-1 cursor-pointer"
                      aria-label={`Open ${cat.name} editorial classification in a new browser tab`}
                    >
                      <span>{cat.name} Category ↗</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-[#9D79B5] mb-3">Editorial Information</h4>
              <ul className="space-y-2 text-xs text-gray-500 dark:text-purple-300" aria-label="Footer Editorial Information Links">
                <li><button onClick={() => alert('Vogue & Velvet was founded as a premier lifestyle publication in 2026.')} className="hover:text-[#9D79B5]" aria-label="Read About Our Publication Vision">About Our Vision</button></li>
                <li><button onClick={() => alert('Inquiries: press@vogueandvelvet.com')} className="hover:text-[#9D79B5]" aria-label="Read Press and Partnerships Contact Information">Press &amp; Partnerships</button></li>
                <li><button onClick={() => alert('Privacy Policy: User data is protected and kept secure.')} className="hover:text-[#9D79B5]" aria-label="Review Privacy Policy and Terms of Service">Privacy &amp; Terms</button></li>
              </ul>
            </div>
          </div>

          <div className="pt-6 text-center text-xs text-gray-400 flex flex-col sm:flex-row justify-between items-center gap-2">
            <p>&copy; 2026 Vogue &amp; Velvet Editorial. All rights reserved.</p>
            <p className="italic">Designed for chic pastel dreamers</p>
          </div>
        </div>
      </footer>

      {/* SEO Inspector Hub Modal */}
      {isSeoHubOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1A1622]/85 backdrop-blur-md flex justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-label="SEO Inspector Hub Modal">
          <div className="bg-[#FFFBFB] dark:bg-[#1A1622] text-[#4A3B4C] dark:text-[#F3E8FF] w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden my-auto flex flex-col max-h-[90vh]">
            
            <div className="px-6 py-4 border-b border-[#F7F2F7] dark:border-gray-800 flex items-center justify-between bg-[#FDF2F4] dark:bg-[#252033]">
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-[#9D79B5]" aria-hidden="true" />
                <h3 className="font-serif text-lg font-semibold italic">SEO Meta &amp; Title Inspector (50-60 &amp; 140-160 chars)</h3>
              </div>
              <button onClick={() => setIsSeoHubOpen(false)} className="p-2 rounded-full hover:bg-[#FDF2F4] dark:hover:bg-[#252033]" aria-label="Close SEO Inspector Modal">
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <div className="p-6 space-y-4 overflow-y-auto flex-grow">
              <p className="text-xs text-gray-500 dark:text-purple-300">
                Every indexable page features a unique title tag (50–60 characters) and a unique, accurate meta description (140–160 characters) with natural keywords.
              </p>

              <div className="space-y-4">
                {CATEGORIES.map(cat => (
                  <div key={cat.name} className="p-4 bg-[#FDF2F4] dark:bg-[#252033] rounded-2xl border border-[#F7F2F7] dark:border-gray-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="font-serif font-semibold text-sm">{cat.name} Page</span>
                        <code className="text-[11px] bg-white dark:bg-[#1A1622] px-2 py-0.5 rounded text-[#9D79B5]">{cat.path}</code>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300">
                          Title: {cat.title.length} chars
                        </span>
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">
                          Meta: {cat.charCount} chars
                        </span>
                      </div>
                    </div>
                    <div className="text-xs font-medium text-[#9D79B5]">Title Tag: {cat.title}</div>
                    <p className="text-xs text-gray-600 dark:text-purple-200 bg-white dark:bg-[#1A1622] p-3 rounded-xl border border-[#F7F2F7] dark:border-gray-800">
                      {cat.metaDesc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Classification URLs Modal */}
      {isClassificationModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1A1622]/85 backdrop-blur-md flex justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-label="Classification Unique URLs Hub Modal">
          <div className="bg-[#FFFBFB] dark:bg-[#1A1622] text-[#4A3B4C] dark:text-[#F3E8FF] w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden my-auto flex flex-col max-h-[90vh]">
            
            <div className="px-6 py-4 border-b border-[#F7F2F7] dark:border-gray-800 flex items-center justify-between bg-[#FDF2F4] dark:bg-[#252033]">
              <div className="flex items-center space-x-2">
                <Share2 className="w-5 h-5 text-[#9D79B5]" aria-hidden="true" />
                <h3 className="font-serif text-lg font-semibold italic">Classification Unique URLs Hub (New Tab)</h3>
              </div>
              <button onClick={() => setIsClassificationModalOpen(false)} className="p-2 rounded-full hover:bg-[#FDF2F4] dark:hover:bg-[#252033]" aria-label="Close Classification Unique URLs Hub Modal">
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <div className="p-6 space-y-4 overflow-y-auto flex-grow">
              <p className="text-xs text-gray-500 dark:text-purple-300">
                Choosing any classification below opens it in a brand new browser tab with unique URL routing.
              </p>

              <div className="space-y-3">
                {CATEGORIES.map(cat => (
                  <div key={cat.name} className="p-4 bg-[#FDF2F4] dark:bg-[#252033] rounded-2xl border border-[#F7F2F7] dark:border-gray-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="space-y-0.5">
                      <div className="flex items-center space-x-2">
                        <span className="font-serif font-semibold text-sm">{cat.name}</span>
                        <code className="text-[11px] bg-white dark:bg-[#1A1622] px-2 py-0.5 rounded text-[#9D79B5]">{cat.path}</code>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-purple-300">{cat.desc}</p>
                    </div>

                    <div className="flex items-center space-x-2 w-full sm:w-auto justify-end">
                      <button 
                        onClick={() => handleClassificationClick(cat.name, cat.path)}
                        className="text-xs bg-[#9D79B5] text-white px-4 py-2 rounded-full hover:bg-[#7C3AED] transition-colors flex items-center space-x-1 cursor-pointer"
                        aria-label={`Open ${cat.name} classification in a new browser tab`}
                      >
                        <span>Open in New Tab ↗</span>
                      </button>
                      <button 
                        onClick={() => copyCategoryUrl(cat.path, cat.name)}
                        className="text-xs bg-white dark:bg-[#1A1622] text-[#4A3B4C] dark:text-[#F3E8FF] border border-[#F7F2F7] dark:border-gray-800 px-3 py-2 rounded-full hover:bg-[#FDF2F4] transition-colors flex items-center space-x-1"
                        aria-label={`Copy ${cat.name} unique classification URL`}
                      >
                        {copiedUrl === cat.name ? <Check className="w-3 h-3" aria-hidden="true" /> : <Copy className="w-3 h-3" aria-hidden="true" />}
                        <span>{copiedUrl === cat.name ? 'Copied URL' : 'Copy URL'}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1A1622]/80 backdrop-blur-md flex justify-center p-0 sm:p-4 md:p-6" role="dialog" aria-modal="true" aria-label={`Article Reader: ${selectedArticle.title}`}>
          <div className="bg-[#FFFBFB] dark:bg-[#1A1622] text-[#4A3B4C] dark:text-[#F3E8FF] w-full max-w-4xl rounded-none sm:rounded-3xl shadow-2xl overflow-hidden my-auto flex flex-col min-h-screen sm:min-h-0 max-h-none sm:max-h-[92vh] relative">
            
            {/* Sticky Header */}
            <div className="sticky top-0 z-20 bg-[#FFFBFB]/90 dark:bg-[#1A1622]/90 backdrop-blur-md px-6 py-4 border-b border-[#F7F2F7] dark:border-gray-800 flex items-center justify-between">
              <span className="text-[10px] uppercase font-semibold tracking-widest px-3 py-1 bg-[#9D79B5] text-white rounded-full">
                {selectedArticle.category}
              </span>
              <div className="flex items-center space-x-3">
                <button 
                  onClick={() => toggleLike(selectedArticle.id)}
                  className="p-2 rounded-full hover:bg-[#FDF2F4] dark:hover:bg-[#252033] transition-colors flex items-center space-x-1.5 text-xs"
                  aria-label={`Like article, ${selectedArticle.likes} likes`}
                >
                  <Heart className={`w-4 h-4 ${likedIds.includes(selectedArticle.id) ? 'text-rose-500 fill-current' : ''}`} aria-hidden="true" />
                  <span>{selectedArticle.likes}</span>
                </button>
                <button 
                  onClick={() => toggleSave(selectedArticle.id)}
                  className="p-2 rounded-full hover:bg-[#FDF2F4] dark:hover:bg-[#252033] transition-colors"
                  aria-label={`Bookmark article: ${selectedArticle.title}`}
                >
                  <Bookmark className={`w-4 h-4 ${savedIds.includes(selectedArticle.id) ? 'text-[#9D79B5] fill-current' : ''}`} aria-hidden="true" />
                </button>
                <button onClick={() => setSelectedArticleId(null)} className="p-2 rounded-full hover:bg-[#FDF2F4] dark:hover:bg-[#252033] transition-colors text-gray-500 hover:text-[#4A3B4C] dark:hover:text-white" aria-label="Close article reader modal">
                  <X className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Modal Scroll Body */}
            <div className="overflow-y-auto p-6 sm:p-10 space-y-6 flex-grow">
              <div className="space-y-4 max-w-3xl mx-auto text-center">
                <div className="flex items-center justify-center space-x-4 text-xs text-gray-500 dark:text-purple-300 pt-2">
                  <div className="flex items-center space-x-2">
                    <img src={selectedArticle.author.avatar} alt={selectedArticle.author.name} referrerPolicy="no-referrer" className="w-8 h-8 rounded-full object-cover border border-[#9D79B5]" />
                    <span className="font-medium text-[#4A3B4C] dark:text-[#F3E8FF]">{selectedArticle.author.name}</span>
                  </div>
                  <span aria-hidden="true">•</span>
                  <span>{selectedArticle.date}</span>
                  <span aria-hidden="true">•</span>
                  <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1" aria-hidden="true" /> {selectedArticle.readTime}</span>
                </div>
              </div>

              {/* Cover Image */}
              <div className="rounded-2xl overflow-hidden shadow-lg my-6 max-h-[480px]">
                <img src={selectedArticle.image} alt={selectedArticle.title} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
              </div>

              {/* HTML Content */}
              <div 
                className="prose max-w-2xl mx-auto text-sm sm:text-base text-[#4A3B4C] dark:text-purple-200/90 leading-relaxed space-y-5 font-normal"
                dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
              />

              {/* Author Bio */}
              <div className="max-w-2xl mx-auto my-8 p-6 bg-[#FDF2F4] dark:bg-[#252033] rounded-2xl border border-[#F7F2F7] dark:border-gray-800 flex items-center space-x-4">
                <img src={selectedArticle.author.avatar} alt={selectedArticle.author.name} referrerPolicy="no-referrer" className="w-14 h-14 rounded-full object-cover border-2 border-[#9D79B5]" />
                <div>
                  <h4 className="font-serif font-semibold text-sm sm:text-base">{selectedArticle.author.name}</h4>
                  <p className="text-xs text-gray-500 dark:text-purple-300 mt-0.5">Senior Editorial Writer at Vogue &amp; Velvet. Passionate about pastel aesthetics, chic styling, and slow living.</p>
                </div>
              </div>

              <hr className="border-[#F7F2F7] dark:border-gray-800 max-w-2xl mx-auto" />

              {/* Comments Section */}
              <section className="max-w-2xl mx-auto pt-4 space-y-6" aria-label="Reader Comments">
                <h3 className="font-serif text-xl font-semibold italic">Reader Comments ({selectedArticle.comments.length})</h3>

                <form onSubmit={handleAddComment} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input 
                      type="text" 
                      required 
                      value={commentName}
                      onChange={(e) => setCommentName(e.target.value)}
                      placeholder="Your Name" 
                      aria-label="Your Name for comment"
                      className="text-xs p-3 rounded-xl bg-white dark:bg-[#252033] border border-[#F7F2F7] dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-[#9D79B5]"
                    />
                    <input 
                      type="email" 
                      required 
                      value={commentEmail}
                      onChange={(e) => setCommentEmail(e.target.value)}
                      placeholder="Your Email (Private)" 
                      aria-label="Your Email for comment (kept private)"
                      className="text-xs p-3 rounded-xl bg-white dark:bg-[#252033] border border-[#F7F2F7] dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-[#9D79B5]"
                    />
                  </div>
                  <textarea 
                    rows={3} 
                    required 
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Share your aesthetic thoughts on this story..." 
                    aria-label="Comment text body"
                    className="w-full text-xs p-3 rounded-xl bg-white dark:bg-[#252033] border border-[#F7F2F7] dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-[#9D79B5]"
                  ></textarea>
                  <button type="submit" className="bg-[#9D79B5] hover:bg-[#7C3AED] text-white text-xs px-6 py-2.5 rounded-full font-medium tracking-wider uppercase transition-colors" aria-label="Submit reader comment">
                    Submit Comment
                  </button>
                </form>

                <div className="space-y-4 pt-2">
                  {selectedArticle.comments.length === 0 ? (
                    <p className="text-xs text-gray-400 italic">No comments yet. Be the first to join the chic aesthetic discussion!</p>
                  ) : (
                    selectedArticle.comments.map((c, idx) => (
                      <div key={idx} className="bg-[#FDF2F4] dark:bg-[#252033] p-4 rounded-2xl border border-[#F7F2F7] dark:border-gray-800 space-y-1">
                        <div className="flex items-center justify-between text-xs font-medium">
                          <span className="text-[#9D79B5] dark:text-purple-300 font-semibold">{c.name}</span>
                          <span className="text-gray-400 text-[10px]">{c.date}</span>
                        </div>
                        <p className="text-xs text-[#4A3B4C] dark:text-purple-200 leading-relaxed">{c.text}</p>
                      </div>
                    ))
                  )}
                </div>
              </section>

            </div>
          </div>
        </div>
      )}

      {/* AI Vibe Stylist Modal */}
      {isAiModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1A1622]/85 backdrop-blur-md flex justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-label="AI Vibe Stylist Assistant">
          <div className="bg-[#FFFBFB] dark:bg-[#1A1622] text-[#4A3B4C] dark:text-[#F3E8FF] w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden my-auto flex flex-col max-h-[90vh]">
            
            <div className="px-6 py-4 border-b border-[#F7F2F7] dark:border-gray-800 flex items-center justify-between bg-[#FDF2F4] dark:bg-[#252033]">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-[#9D79B5]" aria-hidden="true" />
                <h3 className="font-serif text-lg font-semibold italic">Vogue &amp; Velvet AI Chic Vibe Stylist</h3>
              </div>
              <button onClick={() => setIsAiModalOpen(false)} className="p-2 rounded-full hover:bg-[#FDF2F4] dark:hover:bg-[#252033]" aria-label="Close AI Vibe Stylist Modal">
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <div className="p-6 space-y-5 overflow-y-auto flex-grow">
              <div className="flex space-x-2" role="group" aria-label="AI Styling Consultation Modes">
                {(['style', 'skincare', 'outfit'] as const).map(mode => (
                  <button 
                    key={mode}
                    onClick={() => setAiMode(mode)}
                    className={`flex-1 py-2 text-xs uppercase tracking-wider rounded-xl font-semibold transition-all ${
                      aiMode === mode 
                        ? 'bg-[#9D79B5] text-white shadow-xs' 
                        : 'bg-[#FDF2F4] dark:bg-[#252033] text-gray-600 dark:text-purple-300'
                    }`}
                    aria-label={`Select ${mode === 'style' ? 'Chic Edit' : mode === 'skincare' ? 'Glow Ritual' : 'OOTD Vibe'} mode`}
                  >
                    {mode === 'style' ? 'Chic Edit' : mode === 'skincare' ? 'Glow Ritual' : 'OOTD Vibe'}
                  </button>
                ))}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-purple-300">Quick Chic Prompt Ideas:</label>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Give me a chic pastel Parisian outfit formula",
                    "How to get glassy dewy skin for date night",
                    "Aesthetic soft-pastel room decor moodboard tips",
                    "Slow morning routine with ceremonial matcha"
                  ].map((chip, i) => (
                    <button 
                      key={i} 
                      onClick={() => { setAiPrompt(chip); handleAiConsult(chip); }}
                      className="text-[11px] bg-[#FDF2F4] dark:bg-[#252033] hover:bg-[#9D79B5] hover:text-white px-3 py-2 rounded-xl transition-colors text-left"
                      aria-label={`Use quick prompt suggestion: ${chip}`}
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <textarea 
                  rows={3}
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  placeholder="Ask your AI fashion editor about chic pastel trends and skincare..." 
                  aria-label="AI prompt input textarea"
                  className="w-full text-xs p-3.5 rounded-2xl bg-white dark:bg-[#252033] border border-[#F7F2F7] dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-[#9D79B5]"
                ></textarea>
                <button 
                  onClick={() => handleAiConsult()}
                  disabled={aiLoading}
                  className="w-full bg-[#4A3B4C] dark:bg-[#F3E8FF] text-[#FFFBFB] dark:text-[#4A3B4C] hover:bg-[#9D79B5] dark:hover:bg-[#9D79B5] dark:hover:text-white text-xs font-medium uppercase tracking-widest py-3 rounded-full transition-all flex items-center justify-center space-x-2 shadow-xs"
                  aria-label="Generate chic vibe recommendation from AI advisor"
                >
                  {aiLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" aria-hidden="true"></div>
                      <span>Consulting AI Vibe Stylist...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" aria-hidden="true" />
                      <span>Generate Chic Vibe Check</span>
                    </>
                  )}
                </button>
              </div>

              {aiResponse && (
                <div className="mt-4 p-5 bg-[#FDF2F4] dark:bg-[#252033] rounded-2xl border border-[#F7F2F7] dark:border-gray-800 space-y-2" role="region" aria-label="AI recommendation result">
                  <h4 className="font-serif text-sm font-semibold text-[#9D79B5] flex items-center space-x-1.5">
                    <Sparkles className="w-4 h-4" aria-hidden="true" /> <span>AI Vibe Stylist Recommendation</span>
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">{aiResponse}</p>
                </div>
              )}
            </div>

          </div>
        </div>
      )}

      {/* Saved Articles Drawer */}
      {isSavedDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-[#1A1622]/60 backdrop-blur-sm flex justify-end" role="dialog" aria-modal="true" aria-label="Saved Reading List Drawer">
          <div className="bg-[#FFFBFB] dark:bg-[#1A1622] w-full max-w-md h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#F7F2F7] dark:border-gray-800">
                <h3 className="font-serif text-xl font-semibold italic">Saved Reading List</h3>
                <button onClick={() => setIsSavedDrawerOpen(false)} className="p-2 text-gray-500 hover:text-[#4A3B4C] dark:hover:text-white" aria-label="Close saved reading list drawer">
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
              <div className="divide-y divide-[#F7F2F7] dark:divide-gray-800 py-4 space-y-4">
                {savedIds.length === 0 ? (
                  <p className="text-xs text-gray-400 text-center py-8">Your saved list is empty. Click the bookmark icon on any post to save stories.</p>
                ) : (
                  blogs.filter(b => savedIds.includes(b.id)).map(blog => (
                    <div key={blog.id} className="py-3 flex items-center justify-between gap-3">
                      <div className="flex items-center space-x-3 overflow-hidden cursor-pointer" onClick={() => { setIsSavedDrawerOpen(false); setSelectedArticleId(blog.id); }} role="button" tabIndex={0} aria-label={`Read saved story: ${blog.title}`}>
                        <img src={blog.image} alt={blog.title} referrerPolicy="no-referrer" className="w-12 h-12 rounded-xl object-cover flex-shrink-0" />
                        <div className="overflow-hidden">
                          <h4 className="font-serif text-xs font-semibold truncate hover:text-[#9D79B5]">{blog.title}</h4>
                          <p className="text-[10px] text-gray-400">{blog.category} • {blog.readTime}</p>
                        </div>
                      </div>
                      <button onClick={() => toggleSave(blog.id)} className="text-gray-400 hover:text-rose-500 p-1" aria-label={`Remove ${blog.title} from saved reading list`}>
                        <Trash2 className="w-4 h-4" aria-hidden="true" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
            <div className="pt-4 border-t border-[#F7F2F7] dark:border-gray-800 text-center">
              <button onClick={() => setIsSavedDrawerOpen(false)} className="text-xs uppercase tracking-widest text-[#9D79B5] hover:underline" aria-label="Return to editorial journal">
                Return To Journal
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
