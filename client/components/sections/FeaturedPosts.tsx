import { Heart, MessageCircle, Share2, Bookmark, Calendar, Clock, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function FeaturedPosts() {
  return (
    <section className="w-full px-6 md:px-20 py-16 md:py-20 bg-white rounded-3xl">
      <div className="max-w-7xl mx-auto flex flex-col gap-15">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-[#0A0814] mb-5">
              Featured Posts
            </h2>
            <p className="text-lg md:text-xl text-[#21242C] leading-relaxed">
              Highlighted missing item currently receiving high community attention. View details, share leads and help bring it back home.
            </p>
          </div>
          <Button className="bg-[#117465] hover:bg-[#0A463D] text-white px-6 py-3 text-lg font-medium rounded-lg shrink-0">
            View All
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <PostCard
            image="https://api.builder.io/api/v1/image/assets/TEMP/9e48ae8a218e73dccebeeea16d4e592cdc9e6c73?width=694"
            title="Black Samsung A52"
            description="I lost my Samsung A52 on my way home from Ikeja Under Bridge. The phone contains important work files ...."
            date="16th  November, 2025"
            time="7:00 PM"
            location="Ikeja Under Bridge"
            price="$55.00"
            likes={0}
            comments={0}
            bookmarked={true}
          />
          <PostCard
            image="https://api.builder.io/api/v1/image/assets/TEMP/7a6cb8f9dca2c1a208be27da3cc61151c432d85a?width=694"
            title="Red BMW Sport Car"
            description="I've lost my car - a red 2020 BMW with license plate ABC 123 XYZ. It has a noticeable scratch on the left...."
            date="12th October, 2025"
            time="11:00 AM"
            location="Robben Island, Western Cape"
            price="$100.00"
            likes={25}
            comments={10}
            bookmarked={false}
          />
          <PostCard
            image="https://api.builder.io/api/v1/image/assets/TEMP/2162c21ee08d99cde54d59630d9d275833a38dcd?width=694"
            title="German Sherperd Dog"
            description="I am looking for my German Shepherd dog. He is a male, about 3 years old, with a tan fur and a distinctive..."
            date="22nd  November, 2025"
            time="9:00 AM"
            location="Lekki Phase 1"
            price="$40.00"
            likes={120}
            comments={4}
            bookmarked={false}
            liked={true}
          />
        </div>

        <div className="flex items-center justify-center gap-4 mt-12">
          <button className="flex items-center justify-center w-11 h-11 rounded-full border-[1.5px] border-[#CFE3E0] hover:bg-[#CFE3E0]/20 transition-colors">
            <ChevronLeft className="w-8 h-8 text-[#CFE3E0]" />
          </button>
          <button className="flex items-center justify-center w-11 h-11 rounded-full bg-[#0A463D] hover:bg-[#117465] transition-colors">
            <ChevronRight className="w-8 h-8 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}

interface PostCardProps {
  image: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  price: string;
  likes?: number;
  comments?: number;
  bookmarked?: boolean;
  liked?: boolean;
}

function PostCard({ image, title, description, date, time, location, price, likes = 0, comments = 0, bookmarked = false, liked = false }: PostCardProps) {
  return (
    <div className="flex flex-col gap-7 p-6 rounded-xl border border-[#E4E4E8] bg-white">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <div className="relative">
            <img 
              src={image} 
              alt={title}
              className="w-full h-[318px] object-cover rounded-[10px]"
            />
            <span className="absolute top-4 right-5 px-4 py-1 bg-[#CFE3E0] text-[#0A463D] text-base rounded-full">
              Active
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Heart className={cn("w-6 h-6", liked ? "fill-[#117465] text-[#117465]" : "text-[#3F3E4D]")} strokeWidth={1.2} />
                {likes > 0 && <span className="text-[#3F3E4D] text-base ml-1">{likes}</span>}
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <MessageCircle className="w-6 h-6 text-[#3F3E4D]" strokeWidth={1.2} />
                {comments > 0 && <span className="text-[#3F3E4D] text-base ml-1">{comments}</span>}
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Share2 className="w-6 h-6 text-[#3F3E4D]" strokeWidth={1.2} />
              </button>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Bookmark className={cn("w-6 h-6", bookmarked ? "fill-[#117465] text-[#117465]" : "text-[#3F3E4D]")} strokeWidth={1.2} />
            </button>
          </div>

          <div className="flex flex-col gap-1.5">
            <h3 className="text-xl font-semibold text-[#100E21]">{title}</h3>
            <p className="text-base text-[#3F3E4D] leading-relaxed">
              {description} <span className="text-[#117465] font-semibold underline cursor-pointer">Read More</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <div className="flex items-center gap-2.5 flex-wrap">
            <div className="flex items-center gap-1 px-3.5 py-2 rounded-full border border-[#B7BECD] bg-[#F7F7F8]">
              <Calendar className="w-4 h-4 text-[#0A463D]" />
              <span className="text-sm text-[#383D48]">{date}</span>
            </div>
            <div className="flex items-center gap-1 px-3.5 py-2 rounded-full border border-[#B7BECD] bg-[#F7F7F8]">
              <Clock className="w-4 h-4 text-[#0A463D]" />
              <span className="text-sm text-[#383D48]">{time}</span>
            </div>
          </div>
          <div className="flex items-center gap-1 px-3.5 py-2 rounded-full border border-[#B7BECD] bg-[#F7F7F8] self-start">
            <MapPin className="w-4 h-4 text-[#0A463D]" />
            <span className="text-sm text-[#383D48]">{location}</span>
          </div>
        </div>

        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-0.5">
            <span className="text-base text-[#3F3E4D]">Price</span>
            <span className="text-2xl font-semibold text-[#100E21]">{price}</span>
          </div>
          <Button className="bg-[#117465] hover:bg-[#0A463D] text-white px-6 h-12 text-base font-medium rounded-lg">
            Submit Lead
          </Button>
        </div>
      </div>
    </div>
  );
}
