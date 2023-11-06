import Item from '../../../components/item';
import Layout from '../../../components/layout';

export default function Bought() {
  return (
    <Layout title="구매내역" canGoBack>
      <div className="flex flex-col space-y-2 py-14 divide-y-[1px]">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Item
            key={i}
            id={i}
            title="Iphone 15"
            price={999}
            comments={1}
            hearts={1}
          />
        ))}
      </div>
    </Layout>
  );
}
