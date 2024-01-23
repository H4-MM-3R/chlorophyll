
import { GridTileImage } from "@/components/grid-title-image";

function ProductItemGridItem({
  priority,
  src,
  title,
  type
}: {
  priority?: boolean;
  src: string;
  title: string;
  type: string;
}) {

  return (
    <div className=" relative group rounded-xl p-4 mx-1 my-2 bg-stone-500/40 backdrop-blur dark:bg-black/40 shadow-2xl">
    
      <div className="relative block aspect-square space-y-4">
        <GridTileImage
          src={src}
          fill
          priority={priority}
          alt="|"
        />
        <div>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-sm text-gray-500">{type}</p>
        </div>
      <div className="flex items-center justify-between">
          <h4 className="font-semibold">₹924.99</h4>
      </div>


      </div>
    </div>
  );
}

export function ProductItemGrid() {
  // Collections that start with `hidden-*` are hidden from the search page.
  return (
    <section className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <ProductItemGridItem
        type="Indoor"
          title="Garden Plant 1"
          src="/display/threeLarge.png"
          priority={true}
        />
        <ProductItemGridItem
        type="Indoor"
          title="Garden Plant 2"
          src="/display/threeSmall1.png"
          priority={true}
        />
        <ProductItemGridItem
        type="Open Air"
          title="Garden Plant 3"
          src="/display/threeSmall2.png"
          priority={true}
        />
        <ProductItemGridItem
        type="Indoor"
          title="Garden Plant 4"
          src="/display/five1.png"
          priority={true}
        />
        <ProductItemGridItem
        type="Open Air"
          title="Garden Plant 5"
          src="/display/five2.png"
          priority={true}
        />
        <ProductItemGridItem
        type="Bonsai"
          title="Garden Plant 6"
          src="/display/fivenew1.png"
          priority={true}
        />
        <ProductItemGridItem
        type="Bonsai"
          title="Garden Plant 7"
          src="/display/fivenew1.png"
          priority={true}
        />
        <ProductItemGridItem
        type="Bonsai"
          title="Garden Plant 8"
          src="/display/fivenew2.png"
          priority={true}
        />
        <ProductItemGridItem
        type="Garden"
          title="Garden Plant 9"
          src="/display/fivenew2.png"
          priority={true}
        />
      </div>
    </section>
  );
}
