// Tiếng Việt 1 – tập một, bài 6 trở đi. Nhập từ ảnh trang sách (pages/…), tranh cắt theo tools/crops/tv1-*.json.
import { lesson, spellingQuiz as SQ } from './vietnamese.js';

const CH1 = 'Tập một: Học vần';
const CH1b = 'Tập một: Vần';
const L = (spec) => lesson('tv', { chapter: spec.n >= 36 ? CH1b : CH1, ...spec });

export const TV1 = [
  L({
    n: 6, t: 'ơ – d', p: 16,
    intro: [['b6-co', 'cờ', 'lá cờ. cờ'], ['b6-da', 'da', 'cặp da. da']],
    spell: [['cờ', ['c', 'ờ'], 'cờ, ơ, cơ, huyền, cờ', ['ơ', 'o']], ['da', ['d', 'a']]],
    find: [
      { name: 'Tiếng nào có âm ơ?', items: [['b6-no', 'nơ', true], ['b6-cho', 'chợ', true], ['b6-ro', 'rổ', false], ['b6-pho', 'phở', true], ['b6-mo', 'mơ', true, 'quả mơ'], ['b6-xe', 'xe máy', false]] },
      { name: 'Tìm tiếng có âm d', items: [['b6-de', 'dê', true], ['b6-de-con', 'dế', true], ['b6-khi', 'khỉ', false], ['b6-dau', 'dâu', true], ['b6-dua', 'dừa', true], ['b6-tao', 'táo', false]] },
    ],
    pick: [{ name: 'Tập đọc', rounds: [['cờ', 'b6-doc-co'], ['cá cờ', 'b6-doc-ca-co'], ['da cá', 'b6-doc-da-ca'], ['cổ cò', 'b6-doc-co-co']] }],
    trace: ['ơ', 'cờ', 'd', 'da'],
  }),
  L({
    n: 7, t: 'đ – e', p: 18,
    intro: [['b7-de', 'đe', 'cái đe. đe']],
    spell: [['đe', ['đ', 'e']]],
    find: [
      { name: 'Tiếng nào có âm đ?', items: [['b7-den', 'đèn', true], ['b7-do', 'đỗ', true], ['b7-ngong', 'ngỗng', false], ['b7-da', 'đá', true], ['b7-lo', 'lọ', false], ['b7-dan', 'đàn', true]] },
      { name: 'Tiếng nào có âm e?', items: [['b7-ve', 've', true], ['b7-me', 'me', true], ['b7-xe', 'xe', true], ['b7-se', 'sẻ', true, 'chim sẻ'], ['b7-dua', 'dứa', false], ['b7-tre', 'tre', true]] },
    ],
    pick: [{ name: 'Tập đọc', rounds: [['đa', 'b7-doc-da'], ['đò', 'b7-doc-do'], ['đố', 'b7-doc-do2'], ['đổ', 'b7-doc-do3'], ['dẻ', 'b7-doc-de']] }],
    trace: ['đ', 'e', 'đe'],
  }),
  L({
    n: 8, t: 'Chồn con đi học', p: 20,
    story: [
      ['b8-t1', 'Vì sao chồn con không tới trường?', 'Chồn con rất ham chơi. Sáng nào chồn con cũng trốn học, ở nhà đá bóng một mình.'],
      ['b8-t2', 'Vì sao các bạn không ai đi chơi với chồn con?', 'Các bạn rủ nhau tới trường. Không bạn nào đi chơi với chồn con, vì chồn con lười học.'],
      ['b8-t3', 'Chồn con bị lạc trong rừng, vì sao?', 'Một hôm, chồn con mải đuổi theo con bướm, chạy mãi vào sâu trong rừng và bị lạc.'],
      ['b8-t4', 'Vì sao chồn con không tìm được đường về?', 'Trên đường có tấm biển chỉ lối. Nhưng chồn con không biết đọc chữ, nên không tìm được đường về.'],
      ['b8-t5', 'Ai đã đưa chồn con về nhà?', 'Bác sư tử đi qua, thấy chồn con đứng khóc, liền đưa chồn con về nhà.'],
      ['b8-t6', 'Sau chuyện đó, chồn con thay đổi thế nào?', 'Từ hôm đó, chồn con chăm chỉ đi học cùng các bạn.'],
    ],
    q: [
      ['Vì sao chồn con không tìm được đường về?', ['Vì chồn con không biết đọc chữ', 'Vì trời tối quá', 'Vì chồn con mệt']],
      ['Ai đã đưa chồn con về nhà?', ['Bác sư tử', 'Bạn nhím', 'Chú chim sẻ']],
    ],
  }),
  L({
    n: 9, t: 'Ôn tập', p: 21, short: 'Ôn tập',
    spell: [['ca', ['c', 'a']], ['cô', ['c', 'ô']], ['da', ['d', 'a']], ['dơ', ['d', 'ơ']], ['đo', ['đ', 'o']], ['đe', ['đ', 'e']]],
    spellName: 'Ghép âm thành tiếng',
    pick: [
      { name: 'Tập đọc', rounds: [['cờ đỏ', 'b9-co-do'], ['cố đô', 'b9-co-do2'], ['đồ cổ', 'b9-do-co'], ['đa', 'b9-da']] },
      { name: 'Tìm từ ứng với hình', rounds: [['dẻ', 'b9-de'], ['đá', 'b9-da2'], ['cọ', 'b9-co-cay'], ['cờ', 'b9-co']] },
    ],
  }),
  L({
    n: 10, t: 'ê – l', p: 22,
    intro: [['b10-le', 'lê', 'quả lê. lê']],
    spell: [['lê', ['l', 'ê']]],
    sort: {
      name: 'Tiếng nào có âm ê? Tiếng nào có âm l?', keys: ['ê', 'l'], ask: 'âm',
      items: [['b10-be', 'bê', 'ê'], ['b10-khe', 'khế', 'ê'], ['b10-lua', 'lửa', 'l'], ['b10-lua2', 'lúa', 'l'], ['b10-tre', 'trê', 'ê', 'cá trê'], ['b10-lan', 'lặn', 'l']],
    },
    pick: [
      { name: 'Tập đọc', rounds: [['la', 'b10-doc-la', 'con la'], ['lá', 'b10-doc-la2'], ['lồ ô', 'b10-doc-lo-o'], ['le le', 'b10-doc-le-le'], ['dế', 'b10-doc-de']] },
      { name: 'Tập đọc', rounds: [['dê', 'b10-doc-de2'], ['đê', 'b10-doc-de3'], ['lọ', 'b10-doc-lo'], ['lê la', 'b10-doc-le-la']] },
    ],
    trace: ['ê', 'l', 'lê'],
  }),
  L({
    n: 11, t: 'b – bễ', p: 24, short: 'b bễ',
    intro: [['b11-be', 'bê', 'con bê. bê'], ['b11-be2', 'bễ', 'cái bễ. bễ']],
    spell: [['bê', ['b', 'ê']], ['bễ', ['b', 'ễ'], 'bờ, ê, bê, ngã, bễ', ['ế', 'e']]],
    find: [
      { name: 'Tiếng nào có âm b?', items: [['b11-bo', 'bò', true], ['b11-la', 'lá', false], ['b11-ban', 'bàn', true], ['b11-bup-be', 'búp bê', true], ['b11-bong', 'bóng', true], ['b11-banh', 'bánh', true]] },
      { name: 'Tiếng nào có thanh ngã?', items: [['b11-ve', 'vẽ', true], ['b11-dua', 'đũa', true], ['b11-qua', 'quạ', false], ['b11-sua', 'sữa', true], ['b11-vo', 'võ', true], ['b11-nhan', 'nhãn', true]] },
    ],
    read: {
      title: 'Ở bờ đê', img: 'b11-doc', text: 'Dê la cà ở bờ đê. Bờ đê có dế. Bờ đê có cả bê.',
      q: [['Bờ đê có gì?', ['Có dế, có cả bê', 'Có cá, có cò', 'Có gà, có vịt']]],
    },
    trace: ['b', 'bê', 'bễ'],
  }),
  L({
    n: 12, t: 'g – h', p: 26,
    intro: [['b12-ga', 'ga', 'nhà ga. ga'], ['b12-ho', 'hồ', 'hồ nước. hồ']],
    spell: [['ga', ['g', 'a']], ['hồ', ['h', 'ồ'], 'hờ, ô, hô, huyền, hồ', ['ô', 'ơ']]],
    sort: {
      name: 'Tiếng nào có âm g? Tiếng nào có âm h?', keys: ['g', 'h'], ask: 'âm',
      items: [['b12-ho2', 'hổ', 'h'], ['b12-gau', 'gấu', 'g'], ['b12-hoa', 'hoa', 'h', 'hoa hồng'], ['b12-hanh', 'hành', 'h'], ['b12-gung', 'gừng', 'g'], ['b12-ga2', 'gà', 'g']],
    },
    read: {
      title: 'Bé Hà, bé Lê', img: 'b12-doc', text: 'Bé Lê ho, bà ạ. Bà bế bé Lê. A, ba! Ba bế cả Hà, cả bé Lê.',
      q: [['Ba bế ai?', ['Ba bế cả Hà, cả bé Lê', 'Ba bế bà', 'Ba bế con bê']]],
    },
    trace: ['g', 'ga', 'h', 'hồ'],
  }),
  L({
    n: 13, t: 'i – ia', p: 28,
    intro: [['b13-bi', 'bi', 'hòn bi. bi'], ['b13-bia', 'bia', 'bia đá. bia']],
    spell: [['bi', ['b', 'i']], ['bia', ['b', 'ia']]],
    sort: {
      name: 'Tiếng nào có âm i? Tiếng nào có âm ia?', keys: ['i', 'ia'], ask: 'âm',
      items: [['b13-bi2', 'bí', 'i', 'quả bí'], ['b13-vi', 'ví', 'i'], ['b13-chi', 'chỉ', 'i', 'cuộn chỉ'], ['b13-mia', 'mía', 'ia'], ['b13-dia', 'đĩa', 'ia'], ['b13-khi', 'khỉ', 'i']],
    },
    read: {
      title: 'Bé Bi, bé Li', img: 'b13-doc', text: 'Bé Li bi bô: Bi, Bi. Bé ạ đi. Bé ạ lia lịa, bé bị ho. Bi dỗ bé.',
      q: [['Khi bé Li bị ho, Bi làm gì?', ['Bi dỗ bé', 'Bi đi học', 'Bi đá bóng']]],
    },
    trace: ['i', 'bi', 'ia', 'bia'],
  }),
  L({
    n: 14, t: 'Hai chú gà con', p: 30,
    story: [
      ['b14-t1', 'Ra vườn kiếm ăn, anh em gà con thấy gì?', 'Hai anh em gà con ra vườn kiếm ăn. Chúng thấy một chú giun đang bò.'],
      ['b14-t2', 'Đang đói bụng, hai chú gà làm gì?', 'Đang đói bụng, hai chú gà cùng lao tới để mổ con giun.'],
      ['b14-t3', 'Vì sao hai anh em gà cãi nhau?', 'Con nào cũng muốn ăn một mình. Thế là hai anh em gà cãi nhau, rồi đánh nhau.'],
      ['b14-t4', 'Khi lại thấy con mồi, anh em gà làm gì?', 'Lúc quay lại tìm con mồi, hai chú gà chẳng thấy con giun đâu nữa.'],
      ['b14-t5', 'Chuột xuất hiện và nói điều gì?', 'Chú chuột xuất hiện và nói: Vì các cậu mải cãi nhau, nên con giun chui xuống đất mất rồi!'],
      ['b14-t6', 'Vì sao hai anh em gà ân hận, xấu hổ?', 'Hai anh em gà con ân hận, xấu hổ. Từ đó, chúng biết nhường nhịn nhau.'],
    ],
    q: [
      ['Vì sao hai anh em gà cãi nhau?', ['Vì con nào cũng muốn ăn một mình', 'Vì trời mưa', 'Vì bị lạc đường']],
      ['Câu chuyện khuyên em điều gì?', ['Anh em phải biết nhường nhịn nhau', 'Phải ăn thật nhanh', 'Không nên ra vườn']],
    ],
  }),
  L({
    n: 15, t: 'Ôn tập', p: 31, short: 'Ôn tập',
    spellName: 'Ghép âm thành tiếng',
    spell: [['la', ['l', 'a']], ['bê', ['b', 'ê']], ['hô', ['h', 'ô']], ['go', ['g', 'o']], ['bia', ['b', 'ia']]],
    read: {
      title: 'Bể cá', img: 'b15-doc', text: 'Ba Hà để bể cá ở hè. Bể có cá, có cò, le le. Cò ở bể là cò đá. Le le là le le gỗ.',
      q: [
        ['Bể cá của ba Hà có những gì?', ['Có cá, có cò, le le', 'Có gà, có vịt', 'Có dê, có bê']],
        ['Cò ở bể là cò gì?', ['Cò đá', 'Cò gỗ', 'Cò thật']],
      ],
    },
    pick: [{ name: 'Tìm từ ứng với hình', rounds: [['bí', 'b15-bi'], ['lê', 'b15-le'], ['hổ', 'b15-ho'], ['gà', 'b15-ga'], ['đĩa', 'b15-dia']] }],
  }),
  L({
    n: 16, t: 'gh', p: 32,
    intro: [['b16-ghe', 'ghế gỗ']],
    spell: [['ghế', ['gh', 'ế'], 'gờ, ê, ghê, sắc, ghế', ['g', 'ê']]],
    sort: {
      name: 'Tiếng nào có chữ g? Tiếng nào có chữ gh?', keys: ['g', 'gh'], ask: 'âm',
      items: [['b16-ga-go', 'gà gô', 'g'], ['b16-ghi', 'ghi', 'gh'], ['b16-go', 'gõ', 'g', 'gõ cửa'], ['b16-go2', 'gỗ', 'g'], ['b16-ghe2', 'ghẹ', 'gh'], ['b16-go-ca', 'gỡ cá', 'g']],
    },
    choose: [SQ([['ghế', 'gế'], ['gà', 'ghà'], ['ghẹ', 'gẹ'], ['gỗ', 'ghỗ']], 'Ghi nhớ: gh đi với e, ê, i')],
    read: {
      title: 'Ghế', img: 'b16-doc', text: 'Hà có ghế gỗ. Ba Hà có ghế da. Bờ hồ có ghế đá. Bà bế bé Lê ở ghế đá.',
      q: [['Ba Hà có ghế gì?', ['Ghế da', 'Ghế gỗ', 'Ghế đá']], ['Bà bế bé Lê ở đâu?', ['Ở ghế đá', 'Ở nhà ga', 'Ở bờ đê']]],
    },
    trace: ['gh', 'ghế gỗ'],
  }),
  L({
    n: 17, t: 'gi – k', p: 34,
    intro: [['b17-gia', 'giá đỗ'], ['b17-ki-da', 'kì đà']],
    spell: [['giá', ['gi', 'á'], 'di, a, gia, sắc, giá', ['g', 'a']], ['kì', ['k', 'ì'], 'ca, i, ki, huyền, kì', ['c', 'i']]],
    sort: {
      name: 'Tiếng nào có chữ gi? Tiếng nào có chữ k?', keys: ['gi', 'k'], ask: 'âm',
      items: [['b17-ke', 'kể', 'k', 'kể chuyện'], ['b17-gie', 'giẻ', 'gi'], ['b17-ke2', 'kẻ', 'k'], ['b17-gio', 'giò', 'gi'], ['b17-bo-ke', 'bờ kè', 'k'], ['b17-gio-ca', 'giỏ cá', 'gi']],
    },
    choose: [SQ([['kẻ', 'cẻ'], ['cá', 'ká'], ['kì đà', 'cì đà'], ['cờ', 'kờ']], 'Ghi nhớ: k đi với e, ê, i')],
    read: {
      title: 'Bé kể', img: 'b17-doc', text: 'Bà bế bé Lê. Bé bi bô: Dì, giò. Đó là bé kể: Dì Kế giã giò. Cỗ có giò, có gà, có cả giá đỗ.',
      q: [['Cỗ có những gì?', ['Có giò, có gà, có cả giá đỗ', 'Có cá, có cờ', 'Có lê, có bí']]],
    },
    trace: ['gi', 'giá đỗ', 'k', 'kì đà'],
  }),
  L({
    n: 18, t: 'kh – m', p: 36,
    intro: [['b18-khe', 'khế', 'quả khế. khế'], ['b18-me', 'me', 'quả me. me']],
    spell: [['khế', ['kh', 'ế'], 'khờ, ê, khê, sắc, khế', ['k', 'ê']], ['me', ['m', 'e']]],
    sort: {
      name: 'Tiếng nào có âm kh? Tiếng nào có âm m?', keys: ['kh', 'm'], ask: 'âm',
      items: [['b18-me2', 'mẹ', 'm'], ['b18-mo', 'mỏ', 'm'], ['b18-khe-da', 'khe đá', 'kh'], ['b18-ca-kho', 'cá kho', 'kh'], ['b18-ca-me', 'cá mè', 'm'], ['b18-khi', 'khỉ', 'kh']],
    },
    read: {
      title: 'Đố bé', img: 'b18-doc', text: 'Bi đó à? Dạ. Đố Bi: Mẹ có gì? Mẹ có cá kho khế. Đố Bi: Bố có gì? Bố có bé Li.',
      q: [['Mẹ có gì?', ['Mẹ có cá kho khế', 'Mẹ có giá đỗ', 'Mẹ có ghế gỗ']], ['Bố có gì?', ['Bố có bé Li', 'Bố có cá mè', 'Bố có quả khế']]],
    },
    trace: ['kh', 'khế', 'm', 'me'],
  }),
  L({
    n: 19, t: 'n – nh', p: 38,
    intro: [['b19-no', 'nơ', 'cái nơ. nơ'], ['b19-nho', 'nho', 'chùm nho. nho']],
    spell: [['nơ', ['n', 'ơ']], ['nho', ['nh', 'o']]],
    sort: {
      name: 'Tiếng nào có âm n? Tiếng nào có âm nh?', keys: ['n', 'nh'], ask: 'âm',
      items: [['b19-na', 'na', 'n', 'quả na'], ['b19-nha', 'nhà', 'nh'], ['b19-nho-co', 'nhổ cỏ', 'nh'], ['b19-nhi', 'nhị', 'nh', 'đàn nhị'], ['b19-ca-no', 'ca nô', 'n'], ['b19-no2', 'nỏ', 'n']],
    },
    read: {
      title: 'Nhà cô Nhã', img: 'b19-doc', text: 'Nhà cô Nhã ở bờ hồ. Hồ nhỏ, nhà nho nhỏ. Hồ có cá mè, ba ba. Nhà có na, nho, khế.',
      q: [['Hồ có gì?', ['Hồ có cá mè, ba ba', 'Hồ có na, nho, khế', 'Hồ có gà, vịt']], ['Nhà có gì?', ['Nhà có na, nho, khế', 'Nhà có cá mè, ba ba', 'Nhà có ghế đá']]],
    },
    trace: ['n', 'nơ', 'nh', 'nho'],
  }),
  L({
    n: 20, t: 'Đôi bạn', p: 40,
    story: [
      ['b20-t1', 'Trong rừng có hai bạn rất thân nhau. Đó là ai?', 'Trong rừng có hai bạn rất thân nhau. Đó là sóc đỏ và sóc nâu.'],
      ['b20-t2', 'Vào đêm nọ, thời tiết trong rừng thế nào?', 'Vào đêm nọ, trời nổi gió to, mưa lớn. Cây cối trong rừng nghiêng ngả.'],
      ['b20-t3', 'Sáng sớm thức dậy, sóc nâu nghĩ gì, làm gì?', 'Sáng sớm thức dậy, sóc nâu lo cho bạn sóc đỏ, vội vàng đi tìm bạn.'],
      ['b20-t4', 'Sóc nâu làm gì khi nhặt được một giỏ quả thông?', 'Trên đường đi, sóc nâu nhặt được một giỏ quả thông. Sóc nâu để dành mang về cho bạn.'],
      ['b20-t5', 'Sóc nâu thấy gì khi trở về nhà?', 'Về đến nhà, sóc nâu thấy trước cửa có một giỏ quả thông. Thì ra sóc đỏ cũng đi tìm bạn và để quà lại.'],
      ['b20-t6', 'Hai bạn gặp lại nhau thế nào?', 'Hai bạn gặp lại nhau, ôm nhau thật vui. Đôi bạn càng thêm thân thiết.'],
    ],
    q: [
      ['Trong rừng có hai bạn rất thân nhau. Đó là ai?', ['Sóc đỏ và sóc nâu', 'Thỏ và rùa', 'Gà và vịt']],
      ['Hai bạn gặp lại nhau thế nào?', ['Ôm nhau thật vui', 'Cãi nhau', 'Không nói gì']],
    ],
  }),
  L({
    n: 21, t: 'Ôn tập', p: 41, short: 'Ôn tập',
    spellName: 'Ghép âm thành tiếng',
    spell: [['ca', ['c', 'a']], ['kia', ['k', 'ia']], ['go', ['g', 'o']], ['ghe', ['gh', 'e']], ['kê', ['k', 'ê']]],
    read: {
      title: 'Bi ở nhà', img: 'b21-doc', text: 'Nhà có giỗ. Mẹ nhờ Bi dỗ bé Li. Bé nhè. Bi bế bé. Bé lơ mơ. Bi đi nhè nhẹ. Dỗ bé khó ghê cơ!',
      q: [['Mẹ nhờ Bi làm gì?', ['Dỗ bé Li', 'Nấu cơm', 'Đi chợ']]],
    },
    choose: [SQ([['Bé kể.', 'Bé cể.'], ['Cò mò cá.', 'Cò mò ká.'], ['Nhà có ghế gỗ.', 'Nhà có gế ghỗ.']])],
  }),
  L({
    n: 22, t: 'ng – ngh', p: 42,
    intro: [['b22-nga', 'ngà', 'ngà voi. ngà'], ['b22-nghe', 'nghé', 'con nghé. nghé']],
    spell: [['ngà', ['ng', 'à'], 'ngờ, a, nga, huyền, ngà', ['ngh', 'a']], ['nghé', ['ngh', 'é'], 'ngờ, e, nghe, sắc, nghé', ['ng', 'e']]],
    sort: {
      name: 'Tiếng nào có chữ ng? Tiếng nào có chữ ngh?', keys: ['ng', 'ngh'], ask: 'âm',
      items: [['b22-bi-ngo', 'bí ngô', 'ng'], ['b22-ngo', 'ngõ nhỏ', 'ng'], ['b22-nghe2', 'nghệ', 'ngh'], ['b22-nga2', 'ngã', 'ng'], ['b22-nha-nghi', 'nhà nghỉ', 'ngh']],
    },
    choose: [SQ([['nghe', 'nge'], ['ngà', 'nghà'], ['nghé', 'ngé'], ['ngõ', 'nghõ']], 'Ghi nhớ: ngh đi với e, ê, i')],
    read: {
      title: 'Bi nghỉ hè', img: 'b22-doc', text: 'Nghỉ hè, Bi ở nhà bà. Nhà bà có gà, có nghé. Ổ gà be bé. Gà có ngô. Nhà nghé nho nhỏ. Nghé có cỏ, có mía.',
      q: [['Nghỉ hè, …', ['Bi ở nhà bà.', 'có gà, có nghé.']], ['Nhà bà …', ['có gà, có nghé.', 'Bi ở nhà bà.']]],
    },
    trace: ['ng', 'ngà', 'ngh', 'nghé'],
  }),
  L({
    n: 23, t: 'p – ph', p: 44,
    intro: [['b23-piano', 'pi a nô'], ['b23-pho-co', 'phố cổ']],
    spell: [['pi', ['p', 'i']], ['phố', ['ph', 'ố'], 'phờ, ô, phô, sắc, phố', ['p', 'ô']]],
    sort: {
      name: 'Tiếng nào có âm p? Tiếng nào có âm ph?', keys: ['p', 'ph'], ask: 'âm',
      items: [['b23-pa-no', 'pa nô', 'p'], ['b23-pha', 'phà', 'ph'], ['b23-pho', 'phở bò', 'ph'], ['b23-phi', 'phi', 'ph', 'ngựa phi'], ['b23-ca-phe', 'cà phê', 'ph']],
    },
    read: {
      title: 'Nhà dì', img: 'b23-doc', text: 'Nhà dì Nga có pi a nô. Cả nhà Bi đi phố, ghé nhà dì, nghe pi a nô. Dì Nga pha cà phê. Bố mẹ có cà phê. Bi có phở. Bé Li có na.',
      q: [['Nhà dì Nga …', ['có pi a nô.', 'đi phố, ghé nhà dì.']], ['Cả nhà Bi …', ['đi phố, ghé nhà dì.', 'có pi a nô.']]],
    },
    trace: ['p', 'pi a nô', 'ph', 'phố cổ'],
  }),
  L({
    n: 24, t: 'qu – r', p: 46,
    intro: [['b24-qua-le', 'quả lê'], ['b24-ro-ca', 'rổ cá']],
    spell: [['quả', ['qu', 'ả'], 'quờ, a, qua, hỏi, quả', ['q', 'a']], ['rổ', ['r', 'ổ'], 'rờ, ô, rô, hỏi, rổ', ['ô', 'o']]],
    sort: {
      name: 'Tiếng nào có âm qu? Tiếng nào có âm r?', keys: ['qu', 'r'], ask: 'âm',
      items: [['b24-ca-qua', 'cá quả', 'qu'], ['b24-ra', 'rá', 'r'], ['b24-que', 'quế', 'qu'], ['b24-qua', 'quạ', 'qu'], ['b24-re', 'rễ', 'r'], ['b24-ga-ri', 'gà ri', 'r']],
    },
    read: {
      title: 'Quà quê', img: 'b24-doc', text: 'Quế có bà ở quê. Khi bà ra phố, cả nhà có quà. Quà là rổ khế, rổ mơ, cá rô, cá quả. Có khi là cô gà ri.',
      q: [['Bà cho nhà Quế quà gì?', ['Rổ khế, rổ mơ, cá rô, cá quả', 'Pi a nô', 'Cà phê']]],
    },
    trace: ['qu', 'quả lê', 'r', 'rổ cá'],
  }),
  L({
    n: 25, t: 's – x', p: 48,
    intro: [['b25-se', 'sẻ', 'chim sẻ. sẻ'], ['b25-xe-ca', 'xe ca']],
    spell: [['sẻ', ['s', 'ẻ'], 'sờ, e, se, hỏi, sẻ', ['x', 'e']], ['xe', ['x', 'e']]],
    sort: {
      name: 'Tiếng nào có âm s? Tiếng nào có âm x?', keys: ['s', 'x'], ask: 'âm',
      items: [['b25-so', 'sổ', 's'], ['b25-xo', 'xô', 'x'], ['b25-si', 'si', 's', 'cây si'], ['b25-xe-go', 'xẻ gỗ', 'x']],
    },
    read: {
      title: 'Sẻ, quạ', img: 'b25-doc',
      text: 'Nhà sẻ có sẻ bé. Sẻ ca ri ri. Phía xa là nhà quạ. Quạ la quạ quạ. Sẻ bé sợ quá. Sẻ bố dỗ: Sẻ ca ri ri. Quạ la quạ quạ. Bé sợ gì!',
    },
    pick: [{ name: 'Ghép hình với chữ', rounds: [['quạ… quạ…', 'b25-qua-tranh', 'quạ quạ'], ['ri… ri…', 'b25-se-tranh', 'ri ri']] }],
    trace: ['s', 'sẻ', 'x', 'xe ca'],
  }),
  L({
    n: 26, t: 'Kiến và bồ câu', p: 50,
    story: [
      ['b26-t1', 'Chuyện gì xảy ra khi kiến xuống suối uống nước?', 'Một hôm, kiến xuống suối uống nước. Chẳng may, kiến trượt chân, rơi xuống dòng nước.'],
      ['b26-t2', 'Nhờ đâu kiến thoát chết?', 'Bồ câu nhìn thấy, vội ngắt một chiếc lá thả xuống. Kiến bám vào chiếc lá, dạt vào bờ, thoát chết.'],
      ['b26-t3', 'Bác thợ săn làm gì khi nhìn thấy bồ câu?', 'Ít lâu sau, một bác thợ săn nhìn thấy bồ câu. Bác giương súng định bắn.'],
      ['b26-t4', 'Kiến đã cứu bồ câu như thế nào?', 'Kiến bò tới, cắn vào chân bác thợ săn. Bác giật mình, đánh rơi súng. Bồ câu bay đi, thoát nạn.'],
    ],
    q: [
      ['Nhờ đâu kiến thoát chết?', ['Nhờ bồ câu thả chiếc lá xuống', 'Nhờ bác thợ săn', 'Nhờ kiến biết bơi']],
      ['Kiến đã cứu bồ câu như thế nào?', ['Kiến cắn vào chân bác thợ săn', 'Kiến bay lên trời', 'Kiến gọi các bạn']],
    ],
  }),
  L({
    n: 27, t: 'Ôn tập', p: 51, short: 'Ôn tập',
    read: {
      title: 'Ở nhà bà', img: 'b27-doc', text: 'Bi có bà ở quê. Nghỉ hè, Bi ở nhà bà. Xa nhà, Bi nhớ bố mẹ. Giá bà ra phố ở nhà Bi, Bi đỡ nhớ bà, nhớ bố mẹ.',
      q: [['Xa nhà, Bi nhớ ai?', ['Bi nhớ bố mẹ', 'Bi nhớ bạn', 'Bi nhớ cô giáo']]],
    },
    choose: [SQ([['nghỉ', 'ngỉ'], ['ngã', 'nghã'], ['ngó', 'nghó']], 'Em chọn chữ nào: ng hay ngh?')],
    trace: ['bà', 'quê'],
  }),
  L({
    n: 28, t: 't – th', p: 52,
    intro: [['b28-to', 'tổ', 'tổ chim. tổ'], ['b28-tho', 'thỏ', 'con thỏ. thỏ']],
    spell: [['tổ', ['t', 'ổ'], 'tờ, ô, tô, hỏi, tổ', ['th', 'ô']], ['thỏ', ['th', 'ỏ'], 'thờ, o, tho, hỏi, thỏ', ['t', 'o']]],
    sort: {
      name: 'Tiếng nào có âm t? Tiếng nào có âm th?', keys: ['t', 'th'], ask: 'âm',
      items: [['b28-to-mi', 'tô mì', 't'], ['b28-tha-ca', 'thả cá', 'th'], ['b28-ta', 'tạ', 't'], ['b28-tho-mo', 'thợ mỏ', 'th'], ['b28-thi', 'quả thị', 'th']],
    },
    read: {
      title: 'Nhớ bố', img: 'b28-doc', text: 'Bố Thơ là thợ mỏ. Bố ở xa nhà. Ở nhà có mẹ, có Thơ, có bé Tộ. Cả nhà nhớ bố.',
      q: [['Bố Thơ …', ['ở xa nhà.', 'nhớ bố.']], ['Cả nhà …', ['nhớ bố.', 'ở xa nhà.']]],
    },
    trace: ['t', 'tổ', 'th', 'thỏ'],
  }),
  L({
    n: 29, t: 'tr – ch', p: 54,
    intro: [['b29-tre', 'tre', 'cây tre. tre'], ['b29-cho', 'chó', 'con chó. chó']],
    spell: [['tre', ['tr', 'e']], ['chó', ['ch', 'ó'], 'chờ, o, cho, sắc, chó', ['tr', 'o']]],
    sort: {
      name: 'Tiếng nào có âm tr? Tiếng nào có âm ch?', keys: ['tr', 'ch'], ask: 'âm',
      items: [['b29-tra', 'trà', 'tr'], ['b29-cho2', 'chõ', 'ch'], ['b29-chi', 'chị', 'ch'], ['b29-tre2', 'trê', 'tr', 'cá trê'], ['b29-tri', 'trĩ', 'tr', 'chim trĩ'], ['b29-chi2', 'chỉ', 'ch']],
    },
    read: {
      title: 'Đi nhà trẻ', img: 'b29-doc', text: 'Chị Trà cho bé Chi đi nhà trẻ. Qua chợ, chị chỉ cho bé cá trê, cá mè. Ở nhà trẻ, Chi nhớ mẹ. Chị Trà dỗ: Bé nhè thì cô chê đó. Bé nghe chị.',
    },
    pick: [{ name: 'Ghép hình với chữ', rounds: [['nhớ mẹ', 'b29-nho-me'], ['dỗ bé Chi', 'b29-do-be']] }],
    trace: ['tr', 'tre', 'ch', 'chó'],
  }),
  L({
    n: 30, t: 'u – ư', p: 56,
    intro: [['b30-tu', 'tủ', 'cái tủ. tủ'], ['b30-su-tu', 'sư tử']],
    spell: [['tủ', ['t', 'ủ'], 'tờ, u, tu, hỏi, tủ', ['ư', 'u']], ['sư', ['s', 'ư']]],
    sort: {
      name: 'Tiếng nào có âm u? Tiếng nào có âm ư?', keys: ['u', 'ư'], ask: 'âm',
      items: [['b30-du-du', 'đu đủ', 'u'], ['b30-ca-thu', 'cá thu', 'u'], ['b30-cu', 'cú', 'u'], ['b30-la-thu', 'lá thư', 'ư'], ['b30-cu-ta', 'cử tạ', 'ư']],
    },
    read: {
      title: 'Chó xù', img: 'b30-doc', text: 'Chó xù lù lù đi ra ngõ. Lũ gà ngỡ nó là sư tử, sợ quá. Sư tử đi qua. Nó ngó chó xù: Mi mà là sư tử à? Chó xù sợ quá: Dạ, chỉ là chó xù ạ.',
      q: [['Ý nào đúng?', ['Lũ gà ngỡ chó xù là sư tử.', 'Sư tử ngỡ chó xù là sư tử.']]],
    },
    trace: ['u', 'tủ', 'ư', 'sư tử'],
  }),
  L({
    n: 31, t: 'ua – ưa', p: 58,
    intro: [['b31-cua', 'cua', 'con cua. cua'], ['b31-ngua', 'ngựa', 'con ngựa. ngựa']],
    spell: [['cua', ['c', 'ua']], ['ngựa', ['ng', 'ựa'], 'ngờ, ưa, ngưa, nặng, ngựa', ['ua', 'ưa']]],
    sort: {
      name: 'Tiếng nào có âm ua? Tiếng nào có âm ưa?', keys: ['ua', 'ưa'], ask: 'âm',
      items: [['b31-dua', 'quả dưa', 'ưa'], ['b31-rua', 'rùa', 'ua'], ['b31-dua2', 'quả dừa', 'ưa'], ['b31-ca-chua', 'cà chua', 'ua'], ['b31-dua3', 'đũa', 'ua'], ['b31-sua', 'sữa', 'ưa']],
    },
    read: {
      title: 'Thỏ thua rùa', img: 'b31-doc', text: 'Bữa đó, thỏ ra bờ hồ. Xa xa có chú rùa. Thỏ đùa, rủ rùa thi đi bộ. Rùa chả sợ: Thi thì thi! Thỏ nghĩ: Cứ để rùa bò. Ta phi như gió. Sợ gì!',
      q: [['Thỏ …', ['rủ rùa thi đi bộ.', 'chả sợ thi.']], ['Rùa …', ['chả sợ thi.', 'rủ rùa thi đi bộ.']]],
    },
    trace: ['ua', 'cua', 'ưa', 'ngựa'],
  }),
  L({
    n: 32, t: 'Dê con nghe lời mẹ', p: 60,
    story: [
      ['b32-t1', 'Trước khi đi, dê mẹ dặn các con điều gì?', 'Trước khi đi kiếm cỏ, dê mẹ dặn các con: Ai gọi cửa cũng đừng mở. Chỉ mở cửa khi nghe tiếng mẹ hát.'],
      ['b32-t2', 'Sói làm gì khi dê mẹ vừa ra khỏi nhà?', 'Dê mẹ vừa ra khỏi nhà, con sói đã đến gõ cửa. Nó giả giọng dê mẹ để lừa bầy dê con.'],
      ['b32-t3', 'Vì sao bầy dê con không mở cửa, đồng thanh đuổi sói đi?', 'Nghe giọng ồm ồm, bầy dê con biết đó không phải là mẹ. Chúng không mở cửa, đồng thanh đuổi: Không phải mẹ! Sói đi đi!'],
      ['b32-t4', 'Thấy vậy, sói làm gì?', 'Thấy vậy, sói đành cụp đuôi bỏ đi.'],
      ['b32-t5', 'Dê mẹ về nhà khen các con thế nào?', 'Dê mẹ về nhà, nghe các con kể lại. Mẹ khen các con ngoan, biết nghe lời mẹ.'],
    ],
    q: [['Vì sao bầy dê con không mở cửa?', ['Vì giọng đó không phải của mẹ', 'Vì cửa bị hỏng', 'Vì dê con đang ngủ']]],
  }),
  L({
    n: 33, t: 'Ôn tập', p: 61, short: 'Ôn tập',
    read: {
      title: 'Thỏ thua rùa', img: 'b33-doc', text: 'Thỏ nghĩ rùa sẽ thua. Nó la cà chỗ nọ, chỗ kia. Rùa tự nhủ: Ta sẽ cố. Giữa trưa, rùa đã bỏ xa thỏ. Thỏ thua rùa.',
      q: [['Vì sao thỏ thua rùa?', ['Vì thỏ la cà, còn rùa cố gắng', 'Vì rùa chạy nhanh hơn thỏ', 'Vì thỏ bị ốm']]],
    },
    trace: ['thỏ', 'rùa'],
  }),
  L({
    n: 34, t: 'v – y', p: 62,
    intro: [['b34-ve', 've', 'con ve. ve'], ['b34-y-ta', 'y tá']],
    spell: [['ve', ['v', 'e']], ['y', ['y'], 'i dài']],
    pick: [{ name: 'Tìm từ ngữ ứng với mỗi hình', rounds: [['vẽ', 'b34-ve2'], ['võ', 'b34-vo2'], ['ví', 'b34-vi'], ['vở', 'b34-vo'], ['y tế xã', 'b34-y-te']] }],
    read: {
      title: 'Dì Tư', img: 'b34-doc', text: 'Dì Tư là y tá. Trưa qua, dì ra y tế xã. Khi về, dì ghé nhà Hà. Dì chỉ cho Hà vẽ. Hà vẽ lá, vẽ ve. Hà vẽ cả bé Lê.',
      q: [['Dì Tư …', ['chỉ cho Hà vẽ.', 'vẽ lá, vẽ ve, vẽ bé Lê.']], ['Hà …', ['vẽ lá, vẽ ve, vẽ bé Lê.', 'chỉ cho Hà vẽ.']]],
    },
    trace: ['v', 've', 'y', 'y tá'],
  }),
  L({
    n: 35, t: 'Chữ hoa', p: 64, short: 'Chữ hoa',
    choose: [
      { name: 'Chữ hoa', q: [['Chữ hoa của chữ b là chữ nào?', ['B', 'D', 'P']], ['Chữ hoa của chữ đ là chữ nào?', ['Đ', 'D', 'Ơ']], ['Chữ hoa của chữ g là chữ nào?', ['G', 'Q', 'C']], ['Chữ hoa của chữ ư là chữ nào?', ['Ư', 'U', 'Ơ']]] },
      { name: 'Câu nào viết đúng?', q: [['Câu nào viết đúng?', ['Dì Tư là y tá.', 'dì tư là y tá.']], ['Câu nào viết đúng?', ['Bé Lê có sữa.', 'bé lê có sữa.']], ['Câu nào viết đúng?', ['Hà có mía.', 'hà có mía.']]] },
    ],
    read: {
      title: 'Chia quà', img: 'b35-doc', text: 'Má ở thị xã về. Má có quà cho cả nhà. Bà có nho. Ba có trà. Hà có mía. Bé Lê có sữa. Ơ, quà của má là gì nhỉ? À, má đã có bé Lê, có Hà là quà quý.',
      q: [['Quà quý của má là gì?', ['Có bé Lê, có Hà', 'Nho và trà', 'Mía và sữa']]],
    },
    trace: ['Dì Tư', 'Hà'],
  }),
  L({
    n: 36, t: 'am – ap', p: 66,
    intro: [['b36-cam', 'quả cam'], ['b36-xe-dap', 'xe đạp']],
    spell: [['am', ['a', 'm']], ['ap', ['a', 'p']], ['cam', ['c', 'am']], ['đạp', ['đ', 'ạp'], 'đờ, áp, đáp, nặng, đạp', ['ap', 'am']]],
    sort: {
      keys: ['am', 'ap'],
      items: [['b36-kham', 'khám', 'am'], ['b36-thap-rua', 'Tháp Rùa', 'ap'], ['b36-tram', 'quả trám', 'am'], ['b36-vam-vo', 'vạm vỡ', 'am'], ['b36-mua-sap', 'múa sạp', 'ap'], ['b36-sap-ne', 'sáp nẻ', 'ap']],
    },
    read: {
      title: 'Bờ Hồ', img: 'b36-doc', text: 'Bố mẹ cho Giáp và bé Lam đi phố cổ. Cả nhà đi bộ ra Bờ Hồ. Gió hồ nhè nhẹ. Bố chỉ cho cả nhà Tháp Rùa ở giữa hồ.',
      q: [['Cả nhà đi bộ …', ['ra Bờ Hồ.', 'đi chợ.', 'về quê.']], ['Bố chỉ cho cả nhà …', ['Tháp Rùa ở giữa hồ.', 'con cá vàng.', 'cây đa.']]],
    },
    trace: ['am', 'quả cam', 'ap', 'xe đạp'],
  }),
  L({
    n: 37, t: 'ăm – ăp', p: 68,
    intro: [['b37-cham-chi', 'chăm chỉ'], ['b37-cap', 'cặp da']],
    spell: [['ăm', ['ă', 'm']], ['ăp', ['ă', 'p']], ['chăm', ['ch', 'ăm']], ['cặp', ['c', 'ặp'], 'cờ, ắp, cắp, nặng, cặp', ['ăp', 'ăm']]],
    sort: {
      keys: ['ăm', 'ăp'],
      items: [['b37-thap', 'thắp', 'ăp'], ['b37-bap', 'bắp ngô', 'ăp'], ['b37-tam', 'tằm', 'ăm', 'con tằm'], ['b37-tam2', 'tắm', 'ăm'], ['b37-nam', 'nằm', 'ăm'], ['b37-gap', 'gắp', 'ăp']],
    },
    read: {
      title: 'Chăm bà', img: 'b37-doc', text: 'Bà bị cảm. Cả nhà lo lắm. Mẹ đi khắp chợ mua lá để chữa cảm. Ở nhà, bố và Thắm pha sữa cho bà. Có cả nhà chăm, bà đã đỡ.',
      q: [
        ['Mẹ …', ['đi mua lá để chữa cảm.', 'pha sữa cho bà.', 'bà đã đỡ.']],
        ['Bố và Thắm …', ['pha sữa cho bà.', 'đi mua lá để chữa cảm.', 'bà đã đỡ.']],
        ['Có cả nhà chăm, …', ['bà đã đỡ.', 'pha sữa cho bà.', 'đi mua lá để chữa cảm.']],
      ],
    },
    trace: ['ăm', 'chăm chỉ', 'ăp', 'cặp da'],
  }),
  L({
    n: 38, t: 'Chú thỏ thông minh', p: 70,
    story: [
      ['b38-t1', 'Thỏ con đến bờ sông làm gì? Nó thấy cá sấu khi nào?', 'Thỏ con đến bờ sông hái hoa. Mải hái hoa, nó không thấy con cá sấu đang nằm rình gần đó.'],
      ['b38-t2', 'Vì sao thỏ nhìn thấy cá sấu mà vẫn đi xuống mép nước?', 'Thỏ con tưởng cá sấu là khúc gỗ, nên vẫn đi xuống mép nước uống nước. Cá sấu bất ngờ đớp lấy thỏ.'],
      ['b38-t3', 'Trước khi nuốt mồi, cá sấu làm gì để dọa thỏ?', 'Trước khi nuốt mồi, cá sấu kêu lên: Hu! Hu! để dọa thỏ.'],
      ['b38-t4', 'Thỏ đã nghĩ ra mẹo gì để thoát thân?', 'Thỏ con nghĩ ra một mẹo. Nó nói: Bác cá sấu ơi, bác phải kêu ha ha thì mới đáng sợ!'],
      ['b38-t5', 'Nghe lời thỏ, cá sấu đã làm gì?', 'Nghe lời thỏ, cá sấu há to miệng kêu: Ha! Ha!'],
      ['b38-t6', 'Khi cá sấu kêu, thỏ con làm gì?', 'Cá sấu vừa há miệng, thỏ con liền nhảy ra ngoài, chạy một mạch vào rừng.'],
    ],
    q: [
      ['Thỏ đã nghĩ ra mẹo gì để thoát thân?', ['Bảo cá sấu kêu ha ha để cá sấu há miệng', 'Đánh nhau với cá sấu', 'Gọi bạn tới giúp']],
      ['Khi cá sấu kêu, thỏ con làm gì?', ['Nhảy ra ngoài, chạy vào rừng', 'Ngủ thiếp đi', 'Khóc thật to']],
    ],
  }),
  L({
    n: 39, t: 'Ôn tập', p: 71, short: 'Ôn tập',
    read: {
      title: 'Cô bé chăm chỉ', img: 'b39-doc', text: 'Bé Chi chăm chỉ lắm. Bé đi khắp nhà. Khi thì bé mở vở của chị, ê a. Khi thì bé đi xe đạp. Khi thì bé khám cho chó Lu. Lu gừ gừ có vẻ thú vị lắm.',
    },
    choose: [{
      name: 'Tìm trong bài đọc',
      q: [['Tiếng nào có vần am?', ['khám', 'khắp', 'chăm']], ['Tiếng nào có vần ap?', ['đạp', 'khắp', 'lắm']], ['Tiếng nào có vần ăm?', ['chăm', 'khám', 'đạp']], ['Tiếng nào có vần ăp?', ['khắp', 'đạp', 'chăm']]],
    }],
    trace: ['chăm chỉ', 'khắp nhà'],
  }),
  L({
    n: 40, t: 'âm – âp', p: 72,
    intro: [['b40-sam', 'củ sâm'], ['b40-ca-map', 'cá mập']],
    spell: [['âm', ['â', 'm']], ['âp', ['â', 'p']], ['sâm', ['s', 'âm']], ['mập', ['m', 'ập'], 'mờ, ấp, mấp, nặng, mập', ['âp', 'âm']]],
    sort: {
      keys: ['âm', 'âp'],
      items: [['b40-nam', 'nấm', 'âm'], ['b40-mam', 'mầm', 'âm'], ['b40-tap-mua', 'tập múa', 'âp'], ['b40-sam-cam', 'sâm cầm', 'âm']],
    },
    choose: [{ name: 'Ghép đúng', q: [['đầm …', ['cá', 'nập', 'lúa']], ['đập …', ['lúa', 'cá', 'nập']], ['tấp …', ['nập', 'lúa', 'cá']]] }],
    read: {
      title: 'Bé Lê', img: 'b40-doc', text: 'Bé Lê mê ti vi. Ti vi có sâm cầm. Bé chỉ: Cò, cò. Ti vi có cá mập. Bé la: Sợ! Má bế bé, vỗ về: Cá mập ở ti vi mà. Má ấm quá, bé chả sợ nữa.',
      q: [['Ý nào đúng?', ['Bé Lê sợ cá mập.', 'Bé Lê chả mê ti vi.']], ['Ý nào đúng?', ['Có má, bé Lê chả sợ nữa.', 'Bé Lê chả mê ti vi.']]],
    },
    trace: ['âm', 'củ sâm', 'âp', 'cá mập'],
  }),
  L({
    n: 41, t: 'em – ep', p: 74,
    intro: [['b41-kem', 'kem', 'que kem. kem'], ['b41-dep', 'dép', 'đôi dép. dép']],
    spell: [['em', ['e', 'm']], ['ep', ['e', 'p']], ['kem', ['k', 'em']], ['dép', ['d', 'ép'], 'dờ, ép, dép', ['ep', 'em']]],
    sort: {
      keys: ['em', 'ep'],
      items: [['b41-le-phep', 'lễ phép', 'ep'], ['b41-tem', 'tem thư', 'em'], ['b41-ca-chep', 'cá chép', 'ep'], ['b41-xem-tv', 'xem ti vi', 'em'], ['b41-rem', 'rèm', 'em'], ['b41-ngo-hep', 'ngõ hẹp', 'ep']],
    },
    read: {
      title: 'Thi vẽ', img: 'b41-doc', text: 'Cá chép và gà nhí thi vẽ. Cá chép vẽ nó làm vua. Gà nhí vẽ gà mẹ chăm lũ gà em. Cô cò, chú trắm chấm thi. Họ cho là gà nhí vẽ vừa đẹp vừa có ý nghĩa.',
      q: [['Ai thắng trong cuộc thi?', ['Gà nhí', 'Cá chép']], ['Vì sao gà nhí thắng?', ['Vì gà nhí vẽ vừa đẹp vừa có ý nghĩa', 'Vì gà nhí to nhất']]],
    },
    trace: ['em', 'kem', 'ep', 'dép'],
  }),
  L({
    n: 42, t: 'êm – êp', p: 76,
    intro: [['b42-dem', 'đêm', 'ban đêm. đêm'], ['b42-bep', 'bếp lửa']],
    spell: [['êm', ['ê', 'm']], ['êp', ['ê', 'p']], ['đêm', ['đ', 'êm']], ['bếp', ['b', 'ếp'], 'bờ, ếp, bếp', ['êp', 'êm']]],
    sort: {
      name: 'Hái quả, xếp vào hai rổ cho đúng', keys: ['êm', 'êp'],
      items: [['b42-nem2', 'nếm', 'êm'], ['b42-nem', 'nệm', 'êm'], [null, 'nếp', 'êp'], ['b42-xep', 'xếp', 'êp'], ['b42-dem2', 'đếm', 'êm'], [null, 'mềm', 'êm']],
    },
    read: {
      title: 'Lúa nếp, lúa tẻ', img: 'b42-doc', text: 'Lúa tẻ cho là nó thua kém lúa nếp vì trẻ em chỉ ưa đồ nếp. Đêm đó, nghe lúa tẻ thổ lộ, lúa nếp đáp: Chị nhầm. Lúa tẻ là vua cả năm. Đồ nếp chỉ là bữa phụ.',
    },
    sorts: [{
      name: 'Mỗi món làm từ loại gạo nào?', keys: ['nếp', 'tẻ'], ask: 'làm từ gạo gì?',
      items: [['b42-com', 'cơm', 'tẻ'], ['b42-xoi', 'xôi gấc', 'nếp'], ['b42-banh-cuon', 'bánh cuốn', 'tẻ'], ['b42-banh-chung', 'bánh chưng', 'nếp'], ['b42-banh-day', 'bánh dày', 'nếp'], ['b42-banh-da', 'bánh đa', 'tẻ']],
    }],
    trace: ['êm', 'đêm', 'êp', 'bếp lửa'],
  }),
  L({
    n: 43, t: 'im – ip', p: 78,
    intro: [['b43-bim-bip', 'bìm bịp', 'chim bìm bịp. bìm bịp']],
    spell: [['im', ['i', 'm']], ['ip', ['i', 'p']], ['bìm', ['b', 'ìm'], 'bờ, im, bim, huyền, bìm', ['im', 'ip']], ['bịp', ['b', 'ịp'], 'bờ, íp, bíp, nặng, bịp', ['ip', 'im']]],
    sort: {
      keys: ['im', 'ip'],
      items: [['b43-nhim', 'nhím', 'im'], ['b43-kip', 'kịp', 'ip'], ['b43-ca-tim', 'cà tím', 'im'], ['b43-kim', 'kìm', 'im'], ['b43-chim', 'chim', 'im'], ['b43-nhip', 'nhíp', 'ip']],
    },
    read: {
      title: 'Sẻ và cò', img: 'b43-doc', text: 'Sẻ gặp cò ở hồ. Sẻ chê mỏ cò thô. Cò chả đáp gì. Sẻ rủ cò qua bờ kia. Gặp gió to, sẻ chìm nghỉm. Cò kịp thò mỏ gắp sẻ, đưa sẻ qua hồ. Từ đó, sẻ chả dám chê cò.',
      q: [['Ai đã cứu sẻ?', ['Cò', 'Sẻ mẹ', 'Cá chép']], ['Từ đó, sẻ thế nào?', ['Sẻ chả dám chê cò', 'Sẻ chê cò nhiều hơn']]],
    },
    trace: ['im', 'ip', 'bìm bịp'],
  }),
  L({
    n: 44, t: 'Ba chú lợn con', p: 80,
    story: [
      ['b44-t1', 'Vì sao ba chú lợn phải làm nhà ở?', 'Ba chú lợn con đã lớn. Lợn mẹ bảo các con phải tự làm nhà để ở.'],
      ['b44-t2', 'Mỗi chú lợn làm nhà bằng gì?', 'Lợn anh làm nhà bằng rơm. Lợn nhỡ làm nhà bằng gỗ. Lợn út chăm chỉ làm nhà bằng gạch.'],
      ['b44-t3', 'Điều gì xảy ra khi sói đến nhà lợn anh?', 'Sói đến nhà lợn anh. Nó thổi một hơi, ngôi nhà rơm đổ sập. Lợn anh chạy sang nhà lợn nhỡ.'],
      ['b44-t4', 'Điều gì xảy ra khi sói đến nhà lợn nhỡ?', 'Sói đến nhà lợn nhỡ. Nó húc thật mạnh, ngôi nhà gỗ cũng đổ. Hai anh em chạy sang nhà lợn út.'],
      ['b44-t5', 'Vì sao sói không phá được nhà lợn út?', 'Nhà lợn út xây bằng gạch rất chắc chắn. Sói thổi mãi, húc mãi cũng không phá được.'],
      ['b44-t6', 'Câu chuyện kết thúc thế nào?', 'Sói đành bỏ đi. Ba anh em lợn con vui vẻ sống bên nhau trong ngôi nhà gạch.'],
    ],
    q: [['Vì sao sói không phá được nhà lợn út?', ['Vì nhà lợn út xây bằng gạch, rất chắc chắn', 'Vì sói mệt quá', 'Vì lợn út to khỏe']]],
  }),
  L({
    n: 45, t: 'Ôn tập', p: 81, short: 'Ôn tập',
    spellName: 'Ghép âm thành vần',
    spell: [['am', ['a', 'm']], ['ăp', ['ă', 'p']], ['âm', ['â', 'm']], ['ep', ['e', 'p']], ['êm', ['ê', 'm']], ['ip', ['i', 'p']]],
    read: {
      title: 'Đêm ở quê', img: 'b45-doc', text: 'Đêm ở quê quả là êm ả. Ở thị xã, cả đêm ì ầm ô tô, xe lửa. Ở quê chỉ nghe gió thở, tre rì rầm, dế rỉ rả. Có chú bìm bịp nấp ở đám cỏ cứ íp bịp, íp bịp.',
      q: [['Đêm ở quê thế nào?', ['Êm ả', 'Ồn ào, ì ầm']], ['Ở quê, đêm nghe thấy gì?', ['Gió thở, tre rì rầm, dế rỉ rả', 'Ô tô, xe lửa ì ầm']]],
    },
    trace: ['Bếp lửa', 'ấm áp'],
  }),
  L({
    n: 46, t: 'iêm – yêm – iêp', p: 82, short: 'iêm yêm iêp',
    intro: [['b46-diem', 'diêm', 'que diêm. diêm'], ['b46-yem', 'yếm', 'cái yếm. yếm'], ['b46-thiep', 'tấm thiếp']],
    spell: [['iêm', ['i', 'ê', 'm'], 'i, ê, mờ, iêm'], ['iêp', ['i', 'ê', 'p'], 'i, ê, pờ, iếp'], ['diêm', ['d', 'iêm']], ['yếm', ['yêm'], 'yếm']],
    sort: {
      keys: ['iêm', 'iêp'],
      items: [['b46-dua-xiem', 'dừa xiêm', 'iêm'], ['b46-mua-kiem', 'múa kiếm', 'iêm'], ['b46-liep', 'tấm liếp', 'iêp'], ['b46-liem', 'liềm', 'iêm'], ['b46-diep', 'diếp cá', 'iêp'], ['b46-tiem', 'kim tiêm', 'iêm']],
    },
    read: {
      title: 'Gà nhí nằm mơ', img: 'b46-doc', text: 'Trưa hè, gà nhí nằm mơ bị quạ cắp đi. Gà nhí sợ quá. Nó chiêm chiếp ầm ĩ. Gà mẹ khe khẽ ru. Mẹ ru êm quá. Gà nhí ngủ thiếp đi.',
      q: [['Ý nào đúng?', ['Gà nhí nằm mơ bị quạ cắp đi.', 'Gà nhí bị quạ cắp đi.']]],
    },
    trace: ['iêm', 'diêm', 'yếm', 'iêp', 'thiếp'],
  }),
  L({
    n: 47, t: 'om – op', p: 84,
    intro: [['b47-dom', 'đom đóm'], ['b47-hop', 'họp tổ']],
    spell: [['om', ['o', 'm']], ['op', ['o', 'p']], ['đom', ['đ', 'om']], ['họp', ['h', 'ọp'], 'hờ, óp, hóp, nặng, họp', ['op', 'om']]],
    sort: {
      keys: ['om', 'op'],
      items: [['b47-cop', 'cọp', 'op', 'con cọp'], ['b47-khom', 'khóm tre', 'om'], ['b47-chom', 'chỏm mũ', 'om'], ['b47-lom', 'lom khom', 'om'], ['b47-xom', 'xóm quê', 'om']],
    },
    read: {
      title: 'Lừa và ngựa', img: 'b47-doc', text: 'Lừa và ngựa đi xa. Lừa còm nhom mà chở lắm đồ quá. Lừa nhờ ngựa chở đỡ. Ngựa chả nghe. Vì cố quá, lừa ngã ra bờ cỏ. Thế là bà chủ xếp đồ từ lừa qua ngựa.',
      q: [['Lừa nhờ ngựa chở đỡ đồ, ngựa …', ['chả nghe.', 'chở giúp ngay.']], ['Lừa ngã, thế là …', ['bà chủ xếp đồ từ lừa qua ngựa.', 'ngựa đi một mình.']]],
    },
    trace: ['om', 'đom đóm', 'op', 'họp tổ'],
  }),
  L({
    n: 48, t: 'ôm – ôp', p: 86,
    intro: [['b48-tom', 'tôm', 'con tôm. tôm'], ['b48-hop', 'hộp sữa']],
    spell: [['ôm', ['ô', 'm']], ['ôp', ['ô', 'p']], ['tôm', ['t', 'ôm']], ['hộp', ['h', 'ộp'], 'hờ, ốp, hốp, nặng, hộp', ['ôp', 'ôm']]],
    sort: {
      keys: ['ôm', 'ôp'],
      items: [['b48-lop', 'lốp xe', 'ôp'], ['b48-com', 'cốm', 'ôm'], ['b48-dom', 'đốm lửa', 'ôm'], ['b48-chom', 'chôm chôm', 'ôm'], ['b48-top', 'tốp ca', 'ôp'], ['b48-gom', 'đồ gốm', 'ôm']],
    },
    read: {
      title: 'Chậm như thỏ', img: 'b48-doc', text: 'Chó thì mổ mổ. Gà thì liếm la. Dữ như quả na. Nhu mì gã cọp. Cò thì phốp pháp. Bò thì ốm o. Cá thì la to. Im như trẻ nhỏ. Chậm như cô thỏ. Lẹ như cụ rùa.',
      q: [
        ['Nói lại cho đúng: Chó thì …', ['liếm la', 'mổ mổ']],
        ['Gà thì …', ['mổ mổ', 'liếm la']],
        ['Chậm như …', ['cụ rùa', 'cô thỏ']],
        ['Lẹ như …', ['cô thỏ', 'cụ rùa']],
      ],
    },
    trace: ['ôm', 'tôm', 'ôp', 'hộp sữa'],
  }),
  L({
    n: 49, t: 'ơm – ơp', p: 88,
    intro: [['b49-com', 'cơm', 'bát cơm. cơm'], ['b49-chop', 'tia chớp']],
    spell: [['ơm', ['ơ', 'm']], ['ơp', ['ơ', 'p']], ['cơm', ['c', 'ơm']], ['chớp', ['ch', 'ớp'], 'chờ, ớp, chớp', ['ơp', 'ơm']]],
    sort: {
      keys: ['ơm', 'ơp'],
      items: [['b49-bom', 'bơm', 'ơm'], ['b49-lop', 'lớp', 'ơp', 'lớp học'], ['b49-bom-ngua', 'bờm ngựa', 'ơm'], ['b49-dop', 'đớp cá', 'ơp'], ['b49-lop-nha', 'lợp nhà', 'ơp'], ['b49-nom', 'nơm', 'ơm']],
    },
    read: {
      title: 'Ví dụ', img: 'b49-doc', text: 'Chị Thơm ra đề: Cặp của Bi có ba quả cam. Bi đáp: Em chả đem cam ra lớp. Chị ví dụ mà. Chị tiếp nhé: Bi cho em Bốp một quả. Chị nhầm ạ. Em Bốp chỉ bú mẹ. Thì chị ví dụ mà.',
      q: [['Chị Thơm …', ['chỉ đưa ra ví dụ.', 'cho là chị Thơm nhầm.']], ['Bi …', ['cho là chị Thơm nhầm.', 'chỉ đưa ra ví dụ.']]],
    },
    trace: ['ơm', 'cơm', 'ơp', 'tia chớp'],
  }),
  L({
    n: 50, t: 'Vịt và sơn ca', p: 90,
    story: [
      ['b50-t1', 'Thấy sơn ca hót rất hay, vịt làm gì?', 'Sơn ca hót rất hay. Vịt con nghe thấy, liền xin sơn ca dạy mình hát.'],
      ['b50-t2', 'Vịt học hát như thế nào? Vì sao nó nghĩ mình vô tích sự?', 'Vịt học mãi mà chỉ kêu được cạc cạc. Vịt buồn, nghĩ mình thật vô tích sự.'],
      ['b50-t3', 'Vì sao vịt và các bạn đều lao tới hồ sen?', 'Bỗng có tiếng kêu cứu: gà con bị rơi xuống hồ sen. Vịt và các bạn đều lao tới hồ sen.'],
      ['b50-t4', 'Vịt cứu gà con như thế nào?', 'Vịt nhảy xuống nước, bơi thật nhanh, đẩy gà con vào bờ.'],
      ['b50-t5', 'Các bạn đã làm gì sau khi vịt cứu gà con?', 'Các bạn vây quanh, khen vịt giỏi. Vịt hiểu ra: ai cũng có việc mình làm tốt.'],
    ],
    q: [
      ['Vịt cứu gà con như thế nào?', ['Vịt bơi ra, đẩy gà con vào bờ', 'Vịt hót thật to', 'Vịt bay lên cao']],
      ['Câu chuyện muốn nói điều gì?', ['Ai cũng có việc mình làm tốt', 'Vịt hát hay hơn sơn ca']],
    ],
  }),
  L({
    n: 51, t: 'Ôn tập', p: 91, short: 'Ôn tập',
    sort: { name: 'Dỡ hàng vào thùng thích hợp', keys: ['ôm', 'ôp', 'yêm', 'iêm'], items: [[null, 'diêm', 'iêm'], [null, 'yếm', 'yêm'], [null, 'lốp', 'ôp'], [null, 'tôm', 'ôm']] },
    read: {
      title: 'Rùa nhí tìm nhà', img: 'b51-doc', text: 'Rùa nhí đi tìm chỗ ở. Nó vừa bò vừa nơm nớp lo gặp thú dữ. Gặp thỏ, rùa lập bập: Tớ chưa có nhà. Thỏ khà khà: Rì rà rì rà. Đem nhà đi phố. Rùa nhớ ra chưa? Rùa ngớ ra: Ừ nhỉ.',
      q: [['Đố em: Nhà rùa đâu?', ['Rùa mang nhà trên lưng', 'Rùa ở nhà thỏ', 'Rùa ở trên cây']]],
    },
    trace: ['Rùa nhí', 'nơm nớp'],
  }),
  L({
    id: 'tv-gk1', n: 51, num: '★', t: 'Ôn tập giữa học kì I', short: 'Ôn giữa kì',
    title: 'Ôn tập giữa học kì I', sayTitle: 'Ôn tập giữa học kì một', p: 92,
    read: {
      title: 'Họp lớp', img: 'gk1-doc', text: 'Lớp cũ họp ở khóm tre ngà. Cả lũ kể lể rôm rả. Sẻ kể: Tổ của nó nhỏ mà đẹp lắm. Gà kể: Nó chăm lũ gà nhỏ như nắm rơm. Cua khệ nệ ôm yếm. Nó sắp có lũ cua bé tí bò khắp hồ.',
      q: [['Lớp cũ họp ở đâu?', ['Ở khóm tre ngà', 'Ở bờ hồ', 'Ở nhà sẻ']]],
    },
    choose: [
      SQ([['gà', 'ghà'], ['gắp', 'ghắp'], ['ghi', 'gi']], 'Em chọn chữ nào: g hay gh?'),
      SQ([['cam', 'kam'], ['cửa sổ', 'kửa sổ'], ['kim', 'cim']], 'Điền chữ c hoặc k'),
      { name: 'Cò và quạ', q: [['Quạ …', ['sắp chộp gà nhí.', 'che cho gà, xua quạ đi.']], ['Cò …', ['che cho gà, xua quạ đi.', 'sắp chộp gà nhí.']]] },
    ],
    pick: [{ name: 'Nối từ ngữ với hình', rounds: [['ấm trà', 'gk1-am-tra'], ['quả mơ', 'gk1-qua-mo'], ['tam ca', 'gk1-tam-ca'], ['cá trắm', 'gk1-ca-tram'], ['cửa chớp', 'gk1-cua-chop']] }],
  }),
  L({
    n: 52, t: 'um – up', p: 96,
    intro: [['b52-chum', 'chum', 'cái chum. chum'], ['b52-bup-be', 'búp bê']],
    spell: [['um', ['u', 'm']], ['up', ['u', 'p']], ['chum', ['ch', 'um']], ['búp', ['b', 'úp'], 'bờ, úp, búp', ['up', 'um']]],
    sort: {
      keys: ['um', 'up'],
      items: [['b52-chum-nho', 'chùm nho', 'um'], ['b52-cup', 'cúp', 'up'], ['b52-tom-hum', 'tôm hùm', 'um'], ['b52-giup', 'giúp đỡ', 'up'], ['b52-bup-che', 'búp chè', 'up'], ['b52-mum', 'mũm mĩm', 'um']],
    },
    read: {
      title: 'Bà và Hà', img: 'b52-doc', text: 'Hà nhỏ mà chăm chỉ. Hà giúp bà xếp đồ ở tủ. Hà nhổ đám cỏ um tùm ở ngõ. Có hôm, Hà giúp bà chữa mũ cho búp bê. Ngắm Hà chăm chú đưa chỉ qua lỗ kim, bà tủm tỉm: Hà của bà ngộ quá!',
      q: [['Hà …', ['chăm chỉ giúp bà.', 'ngắm Hà, tủm tỉm.']], ['Bà …', ['ngắm Hà, tủm tỉm.', 'chăm chỉ giúp bà.']]],
    },
    trace: ['um', 'chum', 'up', 'búp bê'],
  }),
  L({
    n: 53, t: 'uôm', p: 98,
    intro: [['b53-buom', 'buồm', 'cánh buồm. buồm']],
    spell: [['uôm', ['u', 'ô', 'm'], 'u, ô, mờ, uôm'], ['buồm', ['b', 'uồm'], 'bờ, uôm, buôm, huyền, buồm', ['uôm', 'um']]],
    sort: {
      name: 'Tiếng nào có vần uôm? Tiếng nào có vần um?', keys: ['uôm', 'um'],
      items: [['b53-muom', 'quả muỗm', 'uôm'], ['b53-sum-hop', 'sum họp', 'um'], ['b53-um-tum', 'um tùm', 'um'], ['b53-nhuom', 'nhuộm', 'uôm']],
    },
    read: {
      title: 'Phố Thợ Nhuộm', img: 'b53-doc', text: 'Ở Thủ đô có phố Thợ Nhuộm. Bà em kể, xưa kia, phố có nghề nhuộm. Phố tấp nập và đẹp lắm. Bà hứa đưa em đi thăm phố. Bà sẽ kể cho em nghe thêm về nghề nhuộm.',
      q: [['Ở Thủ đô …', ['có phố Thợ Nhuộm.', 'tấp nập và đẹp lắm.']], ['Phố …', ['tấp nập và đẹp lắm.', 'có phố Thợ Nhuộm.']]],
    },
    trace: ['uôm', 'buồm', 'quả muỗm'],
  }),
  L({
    n: 54, t: 'ươm – ươp', p: 100,
    intro: [['b54-buom', 'bươm bướm'], ['b54-muop', 'quả mướp']],
    spell: [['ươm', ['ư', 'ơ', 'm'], 'ư, ơ, mờ, ươm'], ['ươp', ['ư', 'ơ', 'p'], 'ư, ơ, pờ, ướp'], ['bướm', ['b', 'ướm'], 'bờ, ươm, bươm, sắc, bướm', ['ươm', 'ươp']], ['mướp', ['m', 'ướp'], 'mờ, ướp, mướp', ['ươp', 'ươm']]],
    sort: {
      name: 'Giúp thỏ đem cà rốt về hai nhà kho', keys: ['ươm', 'ươp'],
      items: [['b54-vong', 'cườm', 'ươm', 'vòng cườm'], ['b54-ca', 'ướp', 'ươp', 'cá ướp'], [null, 'lượm', 'ươm'], [null, 'gươm', 'ươm'], [null, 'tướp', 'ươp']],
    },
    read: {
      title: 'Ủ ấm cho bà', img: 'b54-doc', text: 'Gió mùa về. Mẹ mua cho bà tấm nệm ấm, vì tấm nệm cũ có chỗ đã tướp ra. Đêm đó, Mi nằm ôm bà ngủ. Bà thì thầm: Bé Mi của bà ấm quá! Ấm như bếp lửa đỏ đượm.',
      q: [['Mẹ …', ['mua cho bà tấm nệm ấm.', 'ôm bà ngủ để ủ ấm cho bà.']], ['Mi …', ['ôm bà ngủ để ủ ấm cho bà.', 'mua cho bà tấm nệm ấm.']]],
    },
    trace: ['ươm', 'bướm', 'ươp', 'mướp'],
  }),
  L({
    n: 55, t: 'an – at', p: 102,
    intro: [['b55-ban', 'bàn', 'cái bàn. bàn'], ['b55-nha-hat', 'nhà hát']],
    spell: [['an', ['a', 'n']], ['at', ['a', 't']], ['bàn', ['b', 'àn'], 'bờ, an, ban, huyền, bàn', ['an', 'at']], ['hát', ['h', 'át'], 'hờ, át, hát', ['at', 'an']]],
    sort: {
      keys: ['an', 'at'],
      items: [['b55-nhan', 'nhãn', 'an'], ['b55-tho-han', 'thợ hàn', 'an'], ['b55-bat', 'bát', 'at'], ['b55-dau', 'hạt đỗ', 'at'], ['b55-man', 'màn', 'an'], ['b55-ngan', 'ngan', 'an']],
    },
    read: {
      title: 'Giàn mướp', text: 'Giàn mướp nhà Hà vừa ra nụ đã thơm ngát. Lắm hôm, Hà vừa đếm nụ vừa khe khẽ hát cho giàn mướp nghe. Có cả đàn bướm về tụ họp. Có lẽ nhờ thế mà mùa hè năm đó, giàn mướp sớm ra quả.',
      q: [['Ý nào đúng?', ['Giàn mướp thơm ngát.', 'Năm đó, giàn mướp chậm ra quả.']], ['Ý nào đúng?', ['Hà khe khẽ hát cho giàn mướp nghe.', 'Năm đó, giàn mướp chậm ra quả.']]],
    },
    trace: ['an', 'bàn', 'at', 'nhà hát'],
  }),
  L({
    n: 56, t: 'Sói và sóc', p: 104,
    story: [
      ['b56-t1', 'Điều gì xảy ra khi sóc đang chuyền trên cành cây?', 'Sóc đang chuyền trên cành cây thì bị trượt chân, rơi trúng vào con sói đang nằm ngủ.'],
      ['b56-t2', 'Sói định làm gì sóc? Sóc van nài thế nào?', 'Sói tóm lấy sóc, định ăn thịt. Sóc van nài: Xin anh tha cho em!'],
      ['b56-t3', 'Sói hỏi sóc điều gì? Sóc nói gì?', 'Sói hỏi: Vì sao bọn sóc các ngươi lúc nào cũng vui vẻ? Sóc nói: Anh thả em ra, em sẽ nói.'],
      ['b56-t4', 'Ở trên cây, sóc trả lời sói thế nào?', 'Sói thả sóc ra. Sóc nhảy lên cây, nói: Anh buồn vì anh độc ác. Còn chúng em vui vì chúng em tốt bụng, không làm hại ai.'],
    ],
    q: [['Vì sao sóc lúc nào cũng vui vẻ?', ['Vì sóc tốt bụng, không làm hại ai', 'Vì sóc có nhiều hạt dẻ', 'Vì sóc biết leo cây']]],
  }),
  L({
    n: 57, t: 'Ôn tập', p: 105, short: 'Ôn tập',
    read: {
      title: 'Tóm cổ kẻ trộm', img: 'b57-doc', text: 'Quạ ghé xóm gà. Gà mơ ngờ ngợ: Quạ la cà làm gì? Sớm ra, gà tía la om sòm: Có trộm! Gà mơ than: Có kẻ đã tha gà nhí đi. Vừa khi đó, thám tử gà cồ tóm cổ quạ. Cả xóm ùa ra, quạ sợ quá.',
      q: [['Ai đã tóm cổ quạ?', ['Thám tử gà cồ', 'Gà mơ', 'Gà nhí']], ['Quạ kiếm cớ la cà để …', ['tha gà nhí.', 'kết bạn.']]],
    },
    pick: [{ name: 'Nhắc lại tên các con vật trong truyện', rounds: [['gà cồ', 'b57-ga-co'], ['quạ', 'b57-qua'], ['gà tía', 'b57-ga-tia'], ['gà nhí', 'b57-ga-nhi'], ['gà mơ', 'b57-ga-mo']] }],
    trace: ['tóm cổ quạ'],
  }),
  L({
    n: 58, t: 'ăn – ăt', p: 106,
    intro: [['b58-chan', 'chăn', 'cái chăn. chăn'], ['b58-mat', 'mắt', 'đôi mắt. mắt']],
    spell: [['ăn', ['ă', 'n']], ['ăt', ['ă', 't']], ['chăn', ['ch', 'ăn']], ['mắt', ['m', 'ắt'], 'mờ, ắt, mắt', ['ăt', 'ăn']]],
    sort: {
      keys: ['ăn', 'ăt'],
      items: [['b58-chim-cat', 'chim cắt', 'ăt'], ['b58-san', 'củ sắn', 'ăn'], ['b58-bat-ca', 'bắt cá', 'ăt'], ['b58-khan', 'khăn mặt', 'ăn'], ['b58-tho-lan', 'thợ lặn', 'ăn'], ['b58-tran', 'trăn', 'ăn']],
    },
    read: {
      title: 'Ở nhà Hà', img: 'b58-doc', text: 'Nhà Hà có bà và ba má. À, có cả Hà và bé Lê nữa chú. Sáu giờ, Hà giúp má sắp cơm. Ba cho gà ăn. Bà rửa mặt cho bé Lê. Kế đó, cả nhà ăn cơm. Bảy giờ, ba má dắt xe đi làm. Hà ra lớp. Bà đưa bé Lê đi nhà trẻ.',
      q: [['Sáu giờ, Hà làm gì?', ['Giúp má sắp cơm', 'Cho gà ăn', 'Rửa mặt cho bé Lê']], ['Ai đưa bé Lê đi nhà trẻ?', ['Bà', 'Ba', 'Hà']]],
    },
    trace: ['ăn', 'chăn', 'ăt', 'mắt'],
  }),
  L({
    n: 59, t: 'ân – ât', p: 108,
    intro: [['b59-can', 'cân', 'cái cân. cân'], ['b59-vat', 'vật', 'đấu vật. vật']],
    spell: [['ân', ['â', 'n']], ['ât', ['â', 't']], ['cân', ['c', 'ân']], ['vật', ['v', 'ật'], 'vờ, ất, vất, nặng, vật', ['ât', 'ân']]],
    sort: {
      name: 'Sút bóng vào hai khung thành cho trúng', keys: ['ân', 'ât'],
      items: [[null, 'đất', 'ât'], [null, 'sân', 'ân'], ['b59-lat-dat', 'lật đật', 'ât'], ['b59-phan', 'phấn', 'ân'], [null, 'mật', 'ât'], ['b59-tat', 'tất', 'ât'], ['b59-man', 'mận', 'ân']],
    },
    read: {
      title: 'Chủ nhật', img: 'b59-doc', text: 'Chủ nhật, bố mẹ Bi ở nhà. Mẹ làm phở bò. Bố giặt giũ. Bi cho gà ăn. Bé Li rửa mặt, rửa chân cho búp bê. Cả nhà ăn phở. Mẹ ăn chậm nhất vì vừa ăn vừa cho bé Li ăn. Bi phụ bố rửa bát. Mẹ thì xem vở của Bi, gật gù: Bi khá lắm!',
      q: [['Bi …', ['cho gà ăn, phụ bố rửa bát.', 'rửa mặt, rửa chân cho búp bê.']], ['Bé Li …', ['rửa mặt, rửa chân cho búp bê.', 'cho gà ăn, phụ bố rửa bát.']]],
    },
    trace: ['ân', 'cân', 'ât', 'vật'],
  }),
  L({
    n: 60, t: 'en – et', p: 110,
    intro: [['b60-xe-ben', 'xe ben'], ['b60-vet', 'vẹt', 'con vẹt. vẹt']],
    spell: [['en', ['e', 'n']], ['et', ['e', 't']], ['ben', ['b', 'en']], ['vẹt', ['v', 'ẹt'], 'vờ, ét, vét, nặng, vẹt', ['et', 'en']]],
    sort: {
      name: 'Xếp trứng vào hai rổ cho đúng', keys: ['en', 'et'],
      items: [['b60-den', 'đèn', 'en'], ['b60-quet', 'quét', 'et'], ['b60-met', 'mẹt', 'et'], ['b60-ren', 'rèn', 'en'], [null, 'khen', 'en'], [null, 'hét', 'et']],
    },
    read: {
      title: 'Phố Lò Rèn', img: 'b60-doc', text: 'Nhà Bi ở phố Lò Rèn. Xưa kia cả phố làm nghề rèn. Giờ chỉ có dăm nhà giữ nghề cũ. Giữa phố xá nhà cửa san sát mà lò rèn đỏ lửa như ở chợ quê. Búa đập chan chát. Bễ thở phì phò. Lửa than khét lẹt.',
      q: [['Ý nào đúng?', ['Lò rèn ở phố đỏ lửa như ở chợ quê.', 'Giờ thì cả phố làm nghề rèn.']]],
    },
    trace: ['en', 'xe ben', 'et', 'vẹt'],
  }),
  L({
    n: 61, t: 'ên – êt', p: 112,
    intro: [['b61-ten-lua', 'tên lửa'], ['b61-tet', 'Tết']],
    spell: [['ên', ['ê', 'n']], ['êt', ['ê', 't']], ['tên', ['t', 'ên']], ['tết', ['t', 'ết'], 'tờ, ết, tết', ['êt', 'ên']]],
    sort: {
      keys: ['ên', 'êt'],
      items: [['b61-nen', 'nến', 'ên'], ['b61-ben-xe', 'bến xe', 'ên'], ['b61-tet-no', 'tết nơ', 'êt'], ['b61-nhen', 'nhện', 'ên'], ['b61-bo-ket', 'bồ kết', 'êt'], ['b61-sen', 'sên', 'ên', 'con sên'], ['b61-ret', 'rết', 'êt']],
    },
    read: {
      title: 'Về quê ăn Tết', img: 'b61-doc', text: 'Nhà Bi về quê ăn Tết. Xe về bến chậm. Mẹ phàn nàn: Chậm như sên! Đêm 30, cả nhà làm lễ bên bàn thờ. Bố lầm rầm khấn. Bà chấm chấm khăn lên mắt. Cả năm bà đã chờ nhà Bi về sum họp bên mâm cơm Tết.',
      q: [['Nhà Bi về quê …', ['ăn Tết.', 'đi học.']], ['Đêm 30, cả nhà Bi …', ['làm lễ bên bàn thờ.', 'đi chợ.']]],
    },
    trace: ['ên', 'tên lửa', 'êt', 'tết'],
  }),
  L({
    n: 62, t: 'Sư tử và chuột nhắt', p: 114,
    story: [
      ['b62-t1', 'Sư tử đi kiếm mồi, tóm được con vật gì?', 'Một hôm, sư tử đi kiếm mồi, tóm được một chú chuột nhắt.'],
      ['b62-t2', 'Khi sư tử định ăn thịt chuột nhắt, chuột nói gì?', 'Sư tử định ăn thịt chuột. Chuột nhắt van xin: Xin ngài tha cho tôi!'],
      ['b62-t3', 'Khi được sư tử tha, chuột nhắt hứa hẹn thế nào?', 'Sư tử tha cho chuột. Chuột nhắt hứa: Sau này, tôi sẽ đền ơn ngài.'],
      ['b62-t4', 'Nghe chuột nhắt hứa hẹn, sư tử phì cười và nói gì?', 'Sư tử phì cười: Chuột nhắt bé tí thì giúp được gì cho ta!'],
      ['b62-t5', 'Khi sư tử bị sa lưới, chuột nhắt làm gì để cứu sư tử?', 'Ít lâu sau, sư tử bị sa lưới của thợ săn. Chuột nhắt chạy tới, gặm đứt lưới, cứu sư tử.'],
      ['b62-t6', 'Chuột nhắt nói gì khi sư tử cảm ơn nó?', 'Sư tử cảm ơn chuột. Chuột nhắt nói: Ngài thấy chưa, bé nhỏ như tôi cũng giúp được ngài đấy.'],
    ],
    q: [['Chuột nhắt làm gì để cứu sư tử?', ['Gặm đứt lưới', 'Gọi thợ săn', 'Chạy trốn']], ['Câu chuyện muốn nói điều gì?', ['Bé nhỏ cũng có thể giúp được người khác', 'Sư tử rất to khỏe']]],
  }),
  L({
    n: 63, t: 'Ôn tập', p: 115, short: 'Ôn tập',
    read: {
      title: 'Kết bạn', img: 'b63-doc', text: 'Chủ nhật, bố mẹ đưa Vân về quê thăm bà. Gần nhà bà có bạn Tâm. Vân và Tâm kết bạn. Bà dẫn Vân và Tâm đi xem gặt lúa. Vân kể cho Tâm nghe về phố xá tấp nập.',
      q: [['Chủ nhật, bố mẹ đưa Vân …', ['về quê thăm bà.', 'đi xem phim.']], ['Bà dẫn Vân và Tâm …', ['đi xem gặt lúa.', 'đi chợ Tết.']]],
    },
    trace: ['Vân và Tâm', 'kết bạn'],
  }),
  L({
    n: 64, t: 'in – it', p: 116,
    intro: [['b64-den-pin', 'đèn pin'], ['b64-mit', 'quả mít']],
    spell: [['in', ['i', 'n']], ['it', ['i', 't']], ['pin', ['p', 'in']], ['mít', ['m', 'ít'], 'mờ, ít, mít', ['it', 'in']]],
    sort: {
      name: 'Hái quả trên cây, xếp vào hai rổ cho đúng', keys: ['in', 'it'],
      items: [['b64-ca-chua', 'chín', 'in', 'cà chua chín'], ['b64-vit', 'vịt', 'it'], ['b64-thit', 'thịt', 'it'], [null, 'nín', 'in'], [null, 'tin', 'in'], [null, 'nhìn', 'in']],
    },
    read: {
      title: 'Hồ sen', img: 'b64-doc', text: 'Gần nhà Ngân có hồ sen đẹp lắm. Từ cửa sổ, Ngân có thể nhìn rõ mặt hồ. Mùa hè đến, sen ra búp. Chỉ ít hôm, sen đã nở kín hồ. Khi gió về, nhà Ngân thơm ngát.',
      q: [['Ý nào đúng?', ['Mùa hè, sen nở kín hồ.', 'Gần nhà Ngân có hồ cá đẹp lắm.']]],
    },
    trace: ['in', 'đèn pin', 'it', 'quả mít'],
  }),
  L({
    n: 65, t: 'iên – iêt', p: 118,
    intro: [['b65-co-tien', 'cô tiên'], ['b65-vn', 'Việt Nam']],
    spell: [['iên', ['i', 'ê', 'n'], 'i, ê, nờ, iên'], ['iêt', ['i', 'ê', 't'], 'i, ê, tờ, iết'], ['tiên', ['t', 'iên']], ['Việt', ['V', 'iệt'], 'vờ, iết, viết, nặng, việt', ['iêt', 'iên']]],
    pick: [{ name: 'Tìm từ ngữ ứng với mỗi hình', rounds: [['biển', 'b65-bien'], ['kiến', 'b65-kien'], ['biệt thự', 'b65-biet-thu'], ['đèn điện', 'b65-den'], ['viết', 'b65-viet'], ['viên phấn', 'b65-phan']] }],
    read: {
      title: 'Tiết tập viết', img: 'b65-doc', text: 'Lớp Hà có tiết tập viết. Hà viết rất cẩn thận. Thế mà bạn Kiên xô bàn làm chữ biển của Hà xiên đi. Hà nhăn mặt. Kiên thì thầm: Tớ lỡ mà. Hà chả giận bạn. Em viết thêm chữ biển thật đẹp. Cô nhìn chữ em, khen: Chữ Hà đẹp lắm!',
      q: [['Vì sao Hà viết chữ xiên?', ['Vì Kiên lỡ xô bàn', 'Vì Hà chưa cẩn thận']], ['Cô khen Hà thế nào?', ['Chữ Hà đẹp lắm!', 'Hà ngoan lắm!']]],
    },
    trace: ['iên', 'cô tiên', 'iêt', 'viết'],
  }),
  L({
    n: 66, t: 'yên – yêt', p: 120,
    intro: [['b66-yen-ngua', 'yên ngựa'], ['b66-nam-yet', 'Nam Yết']],
    spell: [['yên', ['y', 'ê', 'n'], 'y, ê, nờ, yên'], ['yết', ['y', 'ế', 't'], 'y, ê, tờ, yết']],
    pick: [{ name: 'Tìm từ ngữ ứng với mỗi hình', rounds: [['yên xe', 'b66-yen-xe'], ['niêm yết', 'b66-niem-yet'], ['chim yến', 'b66-yen'], ['yết kiến', 'b66-yet-kien']] }],
    choose: [SQ([['tiên', 'tyên'], ['yến', 'iến'], ['biết', 'byết'], ['yết', 'iết']], 'Ghi nhớ: không có âm đầu thì viết yê')],
    read: {
      title: 'Nam Yết của em', img: 'b66-a1',
      text: 'Nam Yết nằm giữa biển, như nét chấm nhỏ trên bản đồ Việt Nam. Từ xưa, Việt Nam đã làm chủ Nam Yết. Nam Yết có nhà cửa, có đèn biển. Chiến sĩ ở đó như ở nhà. Nam Yết là bộ phận của cơ thể Việt Nam.',
    },
    pick: [{ name: 'Nói điều em biết về đảo Nam Yết', rounds: [['Nam Yết nằm giữa biển', 'b66-a1'], ['Nam Yết có đèn biển', 'b66-a3'], ['Chiến sĩ ở đó như ở nhà', 'b66-a4']] }],
    trace: ['yên ngựa', 'yết kiến'],
  }),
  L({
    n: 67, t: 'on – ot', p: 122,
    intro: [['b67-me-con', 'mẹ con'], ['b67-chim-hot', 'chim hót']],
    spell: [['on', ['o', 'n']], ['ot', ['o', 't']], ['con', ['c', 'on']], ['hót', ['h', 'ót'], 'hờ, ót, hót', ['ot', 'on']]],
    pick: [{ name: 'Tìm từ ngữ ứng với mỗi hình', rounds: [['rót trà', 'b67-rot-tra'], ['nón lá', 'b67-non'], ['sọt cá', 'b67-sot-ca'], ['quả nhót', 'b67-nhot'], ['ném còn', 'b67-nem-con']] }],
    read: {
      title: 'Mẹ con cá rô', img: 'b67-doc', text: 'Rô mẹ đi kiếm ăn, dặn con: Con ở nhà, chớ đi xa nhé. Rô con dạ rõ to. Mẹ vừa đi, rô con liền tót ra ngõ. Nó rủ cá cờ lên bờ xem ở đó có gì lạ. Cá cờ can: Mẹ bạn dặn chớ đi xa mà. Rô con đáp: Bờ hồ gần lắm.',
      q: [['Rô mẹ vừa đi:', ['Rô con đã rủ cá cờ lên bờ.', 'Cá cờ đã rủ rô con đi xa.']]],
    },
    trace: ['on', 'mẹ con', 'ot', 'chim hót'],
  }),
  L({
    n: 68, t: 'Mây đen và mây trắng', p: 124,
    story: [
      ['b68-t1', 'Mây trắng nói gì với mây đen?', 'Mây trắng bay qua, chê mây đen: Cậu đen sì, xấu xí quá! Tránh xa tớ ra!'],
      ['b68-t2', 'Mây đen lặng im vì còn mải nghĩ điều gì?', 'Mây đen lặng im. Nó còn mải nghĩ: Đồng ruộng khô hạn quá, cây cối đang khát nước.'],
      ['b68-t3', 'Vì sao mây đen oà khóc?', 'Thương cây cối, đồng ruộng khô cằn, mây đen oà khóc.'],
      ['b68-t4', 'Nước mắt của mây đen mang lại điều gì cho cánh đồng và cỏ cây, hoa lá?', 'Nước mắt của mây đen thành mưa. Cánh đồng, cỏ cây, hoa lá được tưới mát, xanh tươi trở lại.'],
      ['b68-t5', 'Vì sao mây trắng xấu hổ, tự trách mình?', 'Mây trắng xấu hổ, tự trách mình đã chê bạn. Mây đen tuy không đẹp nhưng đã làm được việc tốt.'],
    ],
    q: [['Nước mắt của mây đen mang lại điều gì?', ['Mưa tưới mát cánh đồng, cỏ cây', 'Gió to', 'Nắng gắt']], ['Vì sao mây trắng xấu hổ?', ['Vì đã chê mây đen', 'Vì mây trắng bị ướt']]],
  }),
  L({
    n: 69, t: 'Ôn tập', p: 125, short: 'Ôn tập',
    spellName: 'Ghép âm thành vần',
    spell: [['in', ['i', 'n']], ['it', ['i', 't']], ['iên', ['iê', 'n']], ['iêt', ['iê', 't']], ['yên', ['yê', 'n']], ['on', ['o', 'n']], ['ot', ['o', 't']]],
    read: {
      title: 'Mẹ con cá rô', img: 'b69-doc2', text: 'Rô con vọt lên bờ. Chả ngờ, bờ hồ khô cạn, nó nằm thở. Chị gió nghe rô than thở, bèn đi tìm thần mưa. Thần mưa phất cờ. Mưa to đổ về, tràn qua bờ hồ. Rô con vọt về nhà. Nó xin mẹ tha thứ.',
      q: [['Khi rô con gặp nạn:', ['Chị gió, thần mưa giúp rô con.', 'Cá cờ giúp rô con.']]],
    },
    trace: ['Rô con', 'gặp mẹ'],
  }),
  L({
    n: 70, t: 'ôn – ôt', p: 126,
    intro: [['b70-thon', 'thôn xóm'], ['b70-cot-co', 'cột cờ']],
    spell: [['ôn', ['ô', 'n']], ['ôt', ['ô', 't']], ['thôn', ['th', 'ôn']], ['cột', ['c', 'ột'], 'cờ, ốt, cốt, nặng, cột', ['ôt', 'ôn']]],
    sort: {
      keys: ['ôn', 'ôt'],
      items: [['b70-ca-rot', 'cà rốt', 'ôt'], ['b70-don', 'đôn', 'ôn'], ['b70-la-lot', 'lá lốt', 'ôt'], ['b70-chon', 'chồn', 'ôn'], ['b70-thot-not', 'thốt nốt', 'ôt'], ['b70-tron-tim', 'trốn tìm', 'ôn']],
    },
    read: {
      title: 'Nụ hôn của mẹ', img: 'b70-doc', text: 'Chi bị sốt. Mẹ đưa bé lên trạm y tế. Cô y tá tiêm cho Chi. Chi vẫn nằm thiêm thiếp. Mẹ hôn lên trán Chi. Nụ hôn của mẹ thật ấm áp. Chi từ từ mở mắt, thì thầm: Mẹ à, con chả ốm nữa. Mẹ sờ trán Chi. Bé đã hạ sốt.',
      q: [['Nụ hôn của mẹ …', ['thật ấm áp.', 'đã hạ sốt.']], ['Bé Chi …', ['đã hạ sốt.', 'thật ấm áp.']]],
    },
    trace: ['ôn', 'thôn xóm', 'ôt', 'cột cờ'],
  }),
  L({
    n: 71, t: 'ơn – ơt', p: 128,
    intro: [['b71-son-ca', 'sơn ca'], ['b71-vot', 'vợt', 'cái vợt. vợt']],
    spell: [['ơn', ['ơ', 'n']], ['ơt', ['ơ', 't']], ['sơn', ['s', 'ơn']], ['vợt', ['v', 'ợt'], 'vờ, ớt, vớt, nặng, vợt', ['ơt', 'ơn']]],
    sort: {
      keys: ['ơn', 'ơt'],
      items: [['b71-lon', 'lợn', 'ơn'], ['b71-thot', 'thớt', 'ơt'], ['b71-son', 'sơn nhà', 'ơn'], ['b71-ca-bon', 'cá thờn bơn', 'ơn'], ['b71-ot', 'ớt', 'ơt'], ['b71-con-mua', 'cơn mưa', 'ơn']],
    },
    read: {
      title: 'Sơn và Hà', img: 'b71-doc', text: 'Giờ kiểm tra. Sơn vừa chép đề vừa lẩm nhẩm: Giỏ có 8 con cá thờn bơn. Cho bớt 5 con, còn 4. Hà thì thầm: Còn 3 chứ? Cô Yến đến bên Hà: Hà để bạn tự làm đi. Hà lễ phép: Dạ. Sơn ngẫm nghĩ. Em chợt nghĩ ra và nắn nót viết: 8 trừ 5 bằng 3.',
      q: [['Cô Yến đề nghị Hà:', ['Để bạn Sơn tự làm.', 'Giúp bạn Sơn.']]],
    },
    trace: ['ơn', 'sơn ca', 'ơt', 'vợt'],
  }),
  L({
    n: 72, t: 'un – ut – ưt', p: 130, short: 'un ut ưt',
    intro: [['b72-phun', 'phun', 'đài phun nước. phun'], ['b72-but', 'bút', 'cái bút. bút'], ['b72-mut', 'mứt', 'mứt. mứt']],
    spell: [['un', ['u', 'n']], ['ut', ['u', 't']], ['ưt', ['ư', 't']], ['phun', ['ph', 'un']], ['bút', ['b', 'út'], 'bờ, út, bút', ['ut', 'ưt']], ['mứt', ['m', 'ứt'], 'mờ, ứt, mứt', ['ưt', 'ut']]],
    sort: {
      keys: ['un', 'ut', 'ưt'],
      items: [['b72-cut', 'chim cút', 'ut'], ['b72-but2', 'râm bụt', 'ut'], ['b72-nut', 'nứt nẻ', 'ưt'], ['b72-chu-lun', 'chú lùn', 'un'], ['b72-sut', 'ấm sứt', 'ưt'], ['b72-cun', 'cún con', 'un']],
    },
    read: {
      title: 'Làm mứt', img: 'b72-doc', text: 'Thỏ rủ cún làm mứt cà rốt. Cún đun bếp, lửa ngùn ngụt. Thỏ la: Lửa to quá! Rút bớt lửa đi! Bạn la to làm tớ sợ quá. Cún phàn nàn. Thỏ nhỏ nhẹ: Làm mứt cần nhỏ lửa, cún à. Thế à? Cảm ơn thỏ nhé.',
      q: [['Thỏ rủ cún …', ['làm mứt cà rốt.', 'đun bếp, lửa ngùn ngụt.', 'cần nhỏ lửa.']], ['Cún …', ['đun bếp, lửa ngùn ngụt.', 'làm mứt cà rốt.', 'cần nhỏ lửa.']], ['Làm mứt …', ['cần nhỏ lửa.', 'làm mứt cà rốt.', 'đun bếp, lửa ngùn ngụt.']]],
    },
    trace: ['un', 'phun', 'ut', 'bút', 'ưt', 'mứt'],
  }),
  L({
    n: 73, t: 'uôn – uôt', p: 132,
    intro: [['b73-chuon', 'chuồn chuồn'], ['b73-chuot', 'chuột', 'con chuột. chuột']],
    spell: [['uôn', ['u', 'ô', 'n'], 'u, ô, nờ, uôn'], ['uôt', ['u', 'ô', 't'], 'u, ô, tờ, uốt'], ['chuồn', ['ch', 'uồn'], 'chờ, uôn, chuôn, huyền, chuồn', ['uôn', 'uôt']], ['chuột', ['ch', 'uột'], 'chờ, uốt, chuốt, nặng, chuột', ['uôt', 'uôn']]],
    sort: {
      keys: ['uôn', 'uôt'],
      items: [['b73-ca-chuon', 'cá chuồn', 'uôn'], ['b73-vuot', 'vuốt nhọn', 'uôt'], ['b73-cuon-chi', 'cuộn chỉ', 'uôn'], ['b73-tuot-lua', 'tuốt lúa', 'uôt'], ['b73-buon', 'buồn bã', 'uôn']],
    },
    read: {
      title: 'Chuột út', img: 'b73-doc', text: 'Mẹ bận làm bếp. Chuột út buồn, lũn cũn đi ra sân. Đến trưa, về nhà, nó ôm mẹ, kể: Mẹ ạ, trên sân có một con thú dữ lắm. Mũ nó đỏ, mỏ nhọn, mắt thô lố. Nó quát rõ to. Con sợ quá. Chuột mẹ đáp: Con thú đó rất hiền. Nó chỉ muốn đùa con.',
    },
    pick: [{ name: 'Đố em: Con thú dữ chuột út gặp là con gì?', options: ['b73-ga', 'b73-cho', 'b73-meo'], rounds: [['Mũ đỏ, mỏ nhọn, quát rõ to', 'b73-ga', 'Con thú dữ chuột út gặp là con gì?']] }],
    trace: ['uôn', 'chuồn', 'uôt', 'chuột'],
  }),
  L({
    n: 74, t: 'Thần gió và Mặt Trời', p: 134,
    story: [
      ['b74-t1', 'Vì sao thần gió kiêu ngạo?', 'Thần gió rất mạnh. Thần thổi một hơi là cây đổ, nhà bay. Vì thế, thần gió rất kiêu ngạo.'],
      ['b74-t2', 'Thần gió nói gì với Mặt Trời? Mặt Trời trả lời ra sao?', 'Thần gió nói với Mặt Trời: Ai làm cho người kia cởi được áo khoác thì người đó mạnh hơn. Mặt Trời mỉm cười đồng ý.'],
      ['b74-t3', 'Thần gió dương oai, kết quả thế nào?', 'Thần gió thổi thật mạnh. Nhưng gió càng thổi, người đi đường càng giữ chặt áo khoác.'],
      ['b74-t4', 'Mặt Trời thử sức, kết quả ra sao?', 'Đến lượt Mặt Trời. Mặt Trời toả nắng ấm áp. Người đi đường thấy nóng, liền cởi áo khoác ra. Thần gió đành chịu thua.'],
    ],
    q: [['Ai làm người đi đường cởi được áo khoác?', ['Mặt Trời', 'Thần gió']], ['Câu chuyện khuyên em điều gì?', ['Không nên kiêu ngạo', 'Phải thổi thật mạnh']]],
  }),
  L({
    n: 75, t: 'Ôn tập', p: 135, short: 'Ôn tập',
    read: {
      title: 'Chuột út', text: 'Chuột út hớn hở kể tiếp: Con còn gặp một con thú rất hiền. Nó nằm thu lu trên sân. Nó luôn liếm chân, liếm cổ và nhìn con rất thân thiện. Chuột mẹ la lớn: Đó là kẻ thù của nhà chuột. Con mà đến gần, nó sẽ ăn thịt con đó.',
    },
    pick: [
      { name: 'Đố em: Con thú hiền chuột út gặp là con gì?', options: ['b73-ga', 'b73-cho', 'b73-meo'], rounds: [['Nằm thu lu, liếm chân, liếm cổ', 'b73-meo', 'Con thú hiền chuột út gặp là con gì?']] },
    ],
    trace: ['Chuột kể', 'con thú'],
  }),
  L({
    n: 76, t: 'ươn – ươt', p: 136,
    intro: [['b76-luon', 'con lươn'], ['b76-luot', 'lướt ván']],
    spell: [['ươn', ['ư', 'ơ', 'n'], 'ư, ơ, nờ, ươn'], ['ươt', ['ư', 'ơ', 't'], 'ư, ơ, tờ, ướt'], ['lươn', ['l', 'ươn']], ['lướt', ['l', 'ướt'], 'lờ, ướt, lướt', ['ươt', 'ươn']]],
    sort: {
      name: 'Giúp thỏ đem cà rốt về hai nhà kho', keys: ['ươn', 'ươt'],
      items: [['b76-vuon', 'vượn', 'ươn'], ['b76-truot', 'trượt', 'ươt'], ['b76-vuot', 'vượt', 'ươt'], ['b76-muot', 'mượt', 'ươt'], ['b76-vuon2', 'vườn', 'ươn']],
    },
    read: {
      title: 'Lướt ván', img: 'b76-doc', text: 'Cún, thỏ và vượn ra biển. Biển đẹp quá. Trên bờ, lũ chuột trượt ván, nô đùa ầm ĩ. Trên mặt biển, bọn cá chuồn hăm hở lướt đi. Đến lượt cún, nó lướt như múa lượn. Vượn chưa dám ra xa. Thỏ sợ ướt, ở trên bờ cổ vũ. Gần trưa, ba bạn về nhà. Ra biển thú vị thật!',
      q: [['Cún …', ['lướt như múa lượn.', 'chưa dám ra xa.', 'sợ ướt, ở trên bờ.']], ['Vượn …', ['chưa dám ra xa.', 'lướt như múa lượn.', 'sợ ướt, ở trên bờ.']], ['Thỏ …', ['sợ ướt, ở trên bờ.', 'chưa dám ra xa.', 'lướt như múa lượn.']]],
    },
    trace: ['ươn', 'lươn', 'ươt', 'lướt ván'],
  }),
  L({
    n: 77, t: 'ang – ac', p: 138,
    intro: [['b77-thang', 'thang', 'cái thang. thang'], ['b77-vac', 'vạc', 'con vạc. vạc']],
    spell: [['ang', ['a', 'ng']], ['ac', ['a', 'c']], ['thang', ['th', 'ang']], ['vạc', ['v', 'ạc'], 'vờ, ác, vác, nặng, vạc', ['ac', 'ang']]],
    sort: {
      keys: ['ang', 'ac'],
      items: [['b77-bac-si', 'bác sĩ', 'ac'], ['b77-ca-vang', 'cá vàng', 'ang'], ['b77-hac', 'con hạc', 'ac'], ['b77-dua-gang', 'dưa gang', 'ang'], ['b77-nhac', 'bản nhạc', 'ac'], ['b77-cho-hang', 'chở hàng', 'ang']],
    },
    read: {
      title: 'Nàng tiên cá', img: 'b77-doc', text: 'Nàng tiên cá là con vua biển. Nửa thân trên của nàng như một cô bé. Nửa thân kia là cá. Nhờ thế, nàng lướt trên biển rất nhẹ nhàng. Nàng tiên cá có tất cả các thứ nàng muốn. Nàng chỉ chưa biết đất liền. Đêm đêm, nàng ngân nga hát. Dân đi biển nghe nàng hát, quên cả mệt, cả buồn.',
      q: [['Nàng tiên cá …', ['ngân nga hát.', 'nghe hát, quên cả mệt, cả buồn.']], ['Dân đi biển …', ['nghe hát, quên cả mệt, cả buồn.', 'ngân nga hát.']]],
    },
    trace: ['ang', 'thang', 'ac', 'vạc'],
  }),
  L({
    n: 78, t: 'ăng – ăc', p: 140,
    intro: [['b78-mang', 'măng', 'cây măng. măng'], ['b78-tac-ke', 'tắc kè']],
    spell: [['ăng', ['ă', 'ng']], ['ăc', ['ă', 'c']], ['măng', ['m', 'ăng']], ['tắc', ['t', 'ắc'], 'tờ, ắc, tắc', ['ăc', 'ăng']]],
    sort: {
      keys: ['ăng', 'ăc'],
      items: [['b78-rang', 'răng', 'ăng'], ['b78-xac', 'xắc', 'ăc'], ['b78-gang', 'găng', 'ăng', 'găng tay'], ['b78-nang', 'tia nắng', 'ăng'], ['b78-lac', 'quả lắc', 'ăc'], ['b78-vang', 'sáng vằng vặc', 'ăng']],
    },
    read: {
      title: 'Cá măng lạc mẹ', img: 'b78-doc', text: 'Ở biển lớn, có một chú cá măng nhỏ. Sáng sáng, mẹ dẫn chú đi kiếm ăn. Một hôm mưa to gió lớn, cá măng lạc mẹ. Cá măng lo lắng lắm. Chú đang cố tìm mẹ thì từ đằng xa, chợt hiện ra một con cá mập. Mồm cá mập há to, răng sắc nhọn, lởm chởm.',
      q: [['Ý nào đúng?', ['Một hôm mưa gió, cá măng lạc mẹ.', 'Cá măng tự ý đi xa nên lạc mẹ.']], ['Ý nào đúng?', ['Cá măng chợt gặp cá mập.', 'Cá măng tự ý đi xa nên lạc mẹ.']]],
    },
    trace: ['ăng', 'măng', 'ăc', 'tắc kè'],
  }),
  L({
    n: 79, t: 'âng – âc', p: 142,
    intro: [['b79-tang', 'nhà tầng'], ['b79-gac', 'quả gấc']],
    spell: [['âng', ['â', 'ng']], ['âc', ['â', 'c']], ['tầng', ['t', 'ầng'], 'tờ, âng, tâng, huyền, tầng', ['âng', 'âc']], ['gấc', ['g', 'ấc'], 'gờ, ấc, gấc', ['âc', 'âng']]],
    sort: {
      keys: ['âng', 'âc'],
      items: [['b79-bac-thang', 'bậc thang', 'âc'], ['b79-vang-trang', 'vầng trăng', 'âng'], ['b79-ngang', 'ngẩng lên', 'âng'], ['b79-nhac', 'nhấc lên', 'âc']],
    },
    read: {
      title: 'Cá măng lạc mẹ', img: 'b79-doc', text: 'Cá mập áp sát cá măng. Cá măng bèn nhô lên, bám chặt thân trên cá mập. Tự nhiên mất hút cá măng, cá mập ngớ ra: Ta đã ăn nó chưa nhỉ? Cá măng bỏ cá mập, tìm về nhà. Chợt mẹ nó vụt đến như một giấc mơ. Nó áp sát mẹ, cảm giác lâng lâng khó tả.',
      q: [['Cá măng bám chặt …', ['thân trên cá mập.', 'vào đá.']], ['Cuối cùng, cá măng …', ['tìm về nhà và gặp mẹ.', 'bị cá mập ăn mất.']]],
    },
    trace: ['âng', 'nhà tầng', 'âc', 'quả gấc'],
  }),
  L({
    n: 80, t: 'Hàng xóm', p: 144,
    story: [
      ['b80-t1', 'Chuyện gì xảy ra ở nhà chồn?', 'Chồn mẹ bị ốm, nằm liệt giường. Đàn chồn con đói, kêu khóc.'],
      ['b80-t2', 'Vì sao chim sẻ biết chuyện đó?', 'Chim sẻ đậu trên cành cây gần nhà chồn, nghe thấy tiếng chồn con khóc.'],
      ['b80-t3', 'Sẻ đã báo tin cho ai? Bác ấy đã làm gì?', 'Sẻ bay đi báo tin cho bác voi. Bác voi liền dùng vòi hút nước mang tới cho nhà chồn.'],
      ['b80-t4', 'Sẻ còn báo tin cho ai nữa? Cô ấy đã làm gì?', 'Sẻ báo tin cho cô sóc. Cô sóc nấu cháo mang sang cho chồn mẹ và các con.'],
      ['b80-t5', 'Nhận được tin của sẻ, chuột túi đã làm gì?', 'Chuột túi nghe tin, liền sang trông nom các chú chồn con.'],
      ['b80-t6', 'Chồn mẹ nói gì trước sự giúp đỡ của mọi người?', 'Chồn mẹ khỏi bệnh, cảm động nói: Cảm ơn các bạn. Hàng xóm tối lửa tắt đèn có nhau thật là quý!'],
    ],
    q: [['Ai đã báo tin cho mọi người?', ['Chim sẻ', 'Bác voi', 'Cô sóc']], ['Câu chuyện nói về điều gì?', ['Hàng xóm biết giúp đỡ nhau', 'Chồn thích đi chơi']]],
  }),
  L({
    n: 81, t: 'Ôn tập', p: 145, short: 'Ôn tập',
    spellName: 'Ghép âm thành vần',
    spell: [['ang', ['a', 'ng']], ['ac', ['a', 'c']], ['ăng', ['ă', 'ng']], ['ăc', ['ă', 'c']], ['âng', ['â', 'ng']], ['âc', ['â', 'c']]],
    read: {
      title: 'Bỏ nghề', img: 'b81-doc', text: 'Có bác thợ săn gặp một con vượn mẹ đang cho con bú. Bác rút tên, ngắm. Vượn mẹ chợt ngẩng lên. Nó nhìn bác, mặt đờ ra. Bác thợ săn nghĩ: Ta bắn nó, con nó sẽ chết. Thế là bác bỏ đi. Từ đó, bác bỏ nghề săn bắn.',
      q: [['Bác thợ săn bỏ đi vì:', ['Chẳng nỡ giết mẹ con vượn.', 'Vượn mẹ đã nhận ra bác.']]],
    },
    choose: [SQ([['gặp', 'ghặp'], ['ghì', 'gì']], 'Tìm chữ g hay gh')],
    trace: ['Vượn mẹ', 'ôm ghì'],
  }),
  L({
    n: 82, t: 'eng – ec', p: 146,
    intro: [['b82-xa-beng', 'xà beng'], ['b82-bec-gie', 'béc giê']],
    spell: [['eng', ['e', 'ng']], ['ec', ['e', 'c']], ['beng', ['b', 'eng']], ['béc', ['b', 'éc'], 'bờ, éc, béc', ['ec', 'eng']]],
    sort: {
      keys: ['eng', 'ec'],
      items: [['b82-lon', 'lợn eng éc', 'ec'], ['b82-xeng', 'xẻng', 'eng'], ['b82-keng', 'gõ kẻng', 'eng'], ['b82-xe-tec', 'xe téc', 'ec'], ['b82-xe-dien', 'leng keng', 'eng']],
    },
    read: {
      title: 'Xe rác', img: 'b82-doc', text: 'Sáng sáng, xe rác lặng lẽ đi làm. Nó về khi tất cả đã ngon giấc. Xe điện, xe téc cằn nhằn: Bẩn quá! Một đêm mưa to, phố xá ngập rác. Xe điện, xe téc lo lắng nhìn. Thế mà sáng sớm, phố xá đã hết rác. Nhìn xe rác bon bon chở rác, xe téc hớn hở, xe điện leng keng: Cảm ơn bạn nhé!',
      q: [['Xe điện, xe téc cảm ơn ai?', ['Xe rác', 'Xe ben', 'Xe đạp']]],
    },
    trace: ['eng', 'xà beng', 'ec', 'xe téc'],
  }),
  L({
    n: 83, t: 'iêng – yêng – iêc', p: 148, short: 'iêng iêc',
    intro: [['b83-chieng', 'gõ chiêng'], ['b83-yeng', 'yểng', 'chim yểng. yểng'], ['b83-xiec', 'xiếc']],
    spell: [['iêng', ['iê', 'ng'], 'i, ê, ngờ, iêng'], ['iêc', ['iê', 'c'], 'i, ê, cờ, iếc'], ['chiêng', ['ch', 'iêng']], ['xiếc', ['x', 'iếc'], 'xờ, iếc, xiếc', ['iêc', 'iêng']]],
    sort: {
      keys: ['iêng', 'iêc'],
      items: [['b83-diec', 'diệc', 'iêc'], ['b83-rieng', 'củ riềng', 'iêng'], ['b83-ca-diec', 'cá diếc', 'iêc'], ['b83-khieng', 'khiêng', 'iêng'], ['b83-tiec', 'tiệc', 'iêc'], ['b83-gieng', 'giếng', 'iêng']],
    },
    read: {
      title: 'Cô xẻng siêng năng', img: 'b83-doc', text: 'Cô xẻng làm việc rất siêng năng. Có lần, chị gió hăm hở dọn đỡ cô. Chả ngờ, gió làm rác văng khắp chốn. Chị gió buồn lắm. Nhìn chị gió ủ rũ, cô xẻng nhẹ nhàng: Chị chớ buồn. Chị luôn giúp nhà nhà mát mẻ mà. Chú yểng nghe thế thì lem lém: Em siêng năng, chị chăm chỉ.',
      q: [['Cô xẻng …', ['rất siêng năng.', 'giúp nhà nhà mát mẻ.', 'khen cô xẻng và chị gió.']], ['Chị gió …', ['giúp nhà nhà mát mẻ.', 'rất siêng năng.', 'khen cô xẻng và chị gió.']], ['Chú yểng …', ['khen cô xẻng và chị gió.', 'rất siêng năng.', 'giúp nhà nhà mát mẻ.']]],
    },
    trace: ['iêng', 'chiêng', 'yểng', 'iêc', 'xiếc'],
  }),
  L({
    n: 84, t: 'ong – oc', p: 150,
    intro: [['b84-bong', 'bóng', 'quả bóng. bóng'], ['b84-soc', 'sóc', 'con sóc. sóc']],
    spell: [['ong', ['o', 'ng']], ['oc', ['o', 'c']], ['bóng', ['b', 'óng'], 'bờ, ong, bong, sắc, bóng', ['ong', 'oc']], ['sóc', ['s', 'óc'], 'sờ, óc, sóc', ['oc', 'ong']]],
    sort: {
      keys: ['ong', 'oc'],
      items: [['b84-coc', 'cóc', 'oc'], ['b84-chong-chong', 'chong chóng', 'ong'], ['b84-ong', 'ong', 'ong'], ['b84-doc', 'đọc', 'oc'], ['b84-ngoc', 'hạt ngọc', 'oc'], ['b84-vong', 'võng', 'ong']],
    },
    read: {
      title: 'Đi học', img: 'b84-doc2', text: 'Sóc, nhím và thỏ ngọc. Học lớp cô sơn ca. Bác ngựa đón từ nhà. Đưa cả ba đi học. Vó ngựa va lóc cóc. Xe cứ lăn bon bon. Chim chóc liệng vòng tròn. Hát ca vang rộn rã. Đi học lắm sự lạ. Cha mẹ vẫn chờ mong. Ba bạn hứa trong lòng. Học tập thật chăm chỉ.',
      q: [['Sóc, nhím và thỏ học lớp …', ['cô sơn ca.', 'bác ngựa.']], ['Ai đưa cả ba bạn đi học?', ['Bác ngựa', 'Cô sơn ca']], ['Ba bạn hứa học tập …', ['thật chăm chỉ.', 'thật vui.']]],
    },
    trace: ['ong', 'bóng', 'oc', 'sóc'],
  }),
  L({
    n: 85, t: 'ông – ôc', p: 152,
    intro: [['b85-song', 'dòng sông'], ['b85-goc-da', 'gốc đa']],
    spell: [['ông', ['ô', 'ng']], ['ôc', ['ô', 'c']], ['sông', ['s', 'ông']], ['gốc', ['g', 'ốc'], 'gờ, ốc, gốc', ['ôc', 'ông']]],
    sort: {
      keys: ['ông', 'ôc'],
      items: [['b85-thong', 'thông', 'ông', 'cây thông'], ['b85-coc', 'cốc', 'ôc'], ['b85-dong-lua', 'đồng lúa', 'ông'], ['b85-tho-moc', 'thợ mộc', 'ôc'], ['b85-oc', 'ốc', 'ôc'], ['b85-ngong', 'ngỗng', 'ông']],
    },
    read: {
      title: 'Quạ và công', img: 'b85-doc1', text: 'Xưa kia, quạ và công trắng muốt. Một hôm, quạ rủ công làm đẹp. Quạ trang điểm cho công. Xong, nó nhìn công, gật gù: Đẹp quá! Giờ đến lượt tớ. Chợt có tiếng lợn eng éc. Làng bên có cỗ. Quạ sốt ruột. Nó dốc hết lọ bột đen đã pha lên thân. Từ đó, quạ đen như than.',
      q: [['Bộ lông của công đẹp …', ['là nhờ quạ trang điểm cho.', 'là do quạ dốc hết lọ bột đen lên thân.']], ['Bộ lông của quạ đen …', ['là do quạ dốc hết lọ bột đen lên thân.', 'là nhờ quạ trang điểm cho.']]],
    },
    pick: [{ name: 'Xếp tranh theo câu chuyện', rounds: [['Quạ trang điểm cho công', 'b85-doc1'], ['Chợt có tiếng lợn eng éc', 'b85-doc2'], ['Quạ đen như than', 'b85-doc3']] }],
    trace: ['ông', 'dòng sông', 'ôc', 'gốc đa'],
  }),
  L({
    n: 86, t: 'Cô bé và con gấu', p: 154,
    story: [
      ['b86-t1', 'Bố mẹ đi vắng, cô bé ở nhà một mình làm gì?', 'Bố mẹ đi vắng, cô bé ở nhà một mình, chạy nhảy bắt bướm ngoài vườn.'],
      ['b86-t2', 'Điều gì bất ngờ xảy ra? Thái độ của cô bé lúc đó ra sao?', 'Bỗng một con gấu to lớn xuất hiện sau hàng rào. Cô bé sợ quá, đứng im không dám nhúc nhích.'],
      ['b86-t3', 'Vì sao sau đó cô bé đỡ sợ?', 'Con gấu ngồi xuống, kêu rên. Cô bé thấy nó bị đau chân, không có ý làm hại mình, nên đỡ sợ.'],
      ['b86-t4', 'Cô bé đã làm gì để giúp gấu?', 'Cô bé nhẹ nhàng rút cái gai to ở chân gấu ra. Gấu hết đau, cảm ơn cô bé rồi đi vào rừng.'],
      ['b86-t5', 'Khi bố mẹ về, nghe cô bé kể lại mọi chuyện, thái độ của họ ra sao?', 'Bố mẹ về, nghe cô bé kể lại, vừa lo lắng vừa khen con dũng cảm, tốt bụng.'],
      ['b86-t6', 'Gấu đã làm gì để tỏ lòng biết ơn cô bé?', 'Ít hôm sau, gấu mang đến tặng cô bé một tổ mật ong thơm ngon.'],
    ],
    q: [['Cô bé đã làm gì để giúp gấu?', ['Rút cái gai ở chân gấu ra', 'Cho gấu ăn', 'Gọi bố mẹ']], ['Gấu tặng cô bé gì?', ['Một tổ mật ong', 'Một bó hoa', 'Một con cá']]],
  }),
  L({
    n: 87, t: 'Ôn tập', p: 155, short: 'Ôn tập',
    read: {
      title: 'Con yểng', img: 'b87-doc', text: 'Ông ở quê ra, tặng Long một con yểng đẹp lắm. Lông nó đen biếc, mỏ đỏ, cổ có sọc vàng. Yểng biết hót Ông ạ, khiến Long mê tít. Long muốn yểng hót: Long à! Chín hôm liền, cứ học xong là Long đến bên lồng yểng, thủ thỉ: Long à! Thế là yểng bỗng cất tiếng: Long à!',
    },
    choose: [{ name: 'Chọn dấu chấm hay dấu chấm hỏi', q: [['Câu nào viết đúng?', ['Ông tặng Long một con yểng rất đẹp.', 'Ông tặng Long một con yểng rất đẹp?']], ['Câu nào viết đúng?', ['Long muốn con yểng làm gì?', 'Long muốn con yểng làm gì.']]] }],
    trace: ['Lông yểng', 'sọc vàng'],
  }),
  L({
    n: 88, t: 'ung – uc', p: 156,
    intro: [['b88-sung', 'sung', 'quả sung. sung'], ['b88-cuc', 'cúc', 'hoa cúc. cúc']],
    spell: [['ung', ['u', 'ng']], ['uc', ['u', 'c']], ['sung', ['s', 'ung']], ['cúc', ['c', 'úc'], 'cờ, úc, cúc', ['uc', 'ung']]],
    sort: {
      keys: ['ung', 'uc'],
      items: [['b88-thung-rac', 'thùng rác', 'ung'], ['b88-bong-sung', 'bông súng', 'ung'], ['b88-ca-nuc', 'cá nục', 'uc'], ['b88-truc', 'khóm trúc', 'uc'], ['b88-xuc-dat', 'xúc đất', 'uc']],
    },
    read: {
      title: 'Gà mẹ, gà con', img: 'b88-doc', text: 'Sáng sớm, gà mẹ dẫn đàn con ra vườn kiếm ăn. Bất chợt mưa to, gió lớn. Đàn gà con rét run. Gà mẹ liền ôm các con, ấp ủ chúng. Rúc trong lòng mẹ, đàn gà con cùng chiêm chiếp: Mẹ ấm quá! Ấm quá!',
      q: [['Đàn gà con …', ['rét run.', 'liền ôm các con, ấp ủ chúng.']], ['Gà mẹ …', ['liền ôm các con, ấp ủ chúng.', 'rét run.']]],
    },
    trace: ['ung', 'sung', 'uc', 'cúc'],
  }),
  L({
    n: 89, t: 'ưng – ưc', p: 158,
    intro: [['b89-lung', 'lưng', 'cái lưng. lưng'], ['b89-ca-muc', 'cá mực']],
    spell: [['ưng', ['ư', 'ng']], ['ưc', ['ư', 'c']], ['lưng', ['l', 'ưng']], ['mực', ['m', 'ực'], 'mờ, ức, mức, nặng, mực', ['ưc', 'ưng']]],
    pick: [{ name: 'Tìm từ ngữ ứng với mỗi hình', rounds: [['chim ưng', 'b89-chim-ung'], ['trứng', 'b89-trung'], ['gừng', 'b89-gung'], ['lực sĩ', 'b89-luc-si'], ['thức đêm', 'b89-thuc-dem'], ['rừng', 'b89-rung']] }],
    read: {
      title: 'Sáng sớm trên biển', img: 'b89-doc', text: 'Sáng sớm, biển thật là đẹp! Từ phía xa tít tắp, một vầng hồng từ từ nhô lên. Mặt biển ửng hồng. Từng lớp sóng nhấp nhô. Những tia nắng sớm nô đùa trên sóng. Nắng lên dần. Mặt biển sáng rực.',
      q: [['Khi vầng hồng nhô lên, mặt biển …', ['ửng hồng.', 'tối om.']], ['Những tia nắng sớm …', ['nô đùa trên sóng.', 'đi ngủ.']]],
    },
    trace: ['ưng', 'lưng', 'ưc', 'cá mực'],
  }),
  L({
    n: 90, t: 'uông – uôc', p: 160,
    intro: [['b90-chuong', 'chuông', 'cái chuông. chuông'], ['b90-duoc', 'đuốc', 'ngọn đuốc. đuốc']],
    spell: [['uông', ['uô', 'ng'], 'u, ô, ngờ, uông'], ['uôc', ['uô', 'c'], 'u, ô, cờ, uốc'], ['chuông', ['ch', 'uông']], ['đuốc', ['đ', 'uốc'], 'đờ, uốc, đuốc', ['uôc', 'uông']]],
    sort: {
      name: 'Xếp hoa vào hai nhóm', keys: ['uông', 'uôc'],
      items: [['b90-thuoc', 'thuốc', 'uôc'], ['b90-xuong', 'xuồng', 'uông'], ['b90-guoc', 'guốc', 'uôc'], ['b90-buong', 'buồng', 'uông'], ['b90-buoc', 'buộc', 'uôc'], ['b90-luong', 'luồng', 'uông', 'cây luồng']],
    },
    read: {
      title: 'Con công lẩn thẩn', img: 'b90-doc', text: 'Công cho rằng nó đẹp nhất trần gian. Một hôm, công ưỡn ngực đến bên hồ. Nó bỗng nhận ra trong hồ có một con công khác. Nó bèn sà xuống hồ để so sắc đẹp. Nhưng nó vừa xuống, con công kia đã biến mất. Công ngụp lặn tìm. Nó ướt nhẹp, run cầm cập. Chim cuốc nhìn công, gật gù: Đẹp mà chẳng khôn!',
      q: [['Ý nào đúng?', ['Con công trong hồ là bóng của con công trên bờ.', 'Con công trong hồ là một con công khác.']]],
    },
    trace: ['uông', 'chuông', 'uôc', 'đuốc'],
  }),
  L({
    n: 91, t: 'ương – ươc', p: 162,
    intro: [['b91-guong', 'gương', 'cái gương. gương'], ['b91-thuoc', 'thước', 'cái thước. thước']],
    spell: [['ương', ['ươ', 'ng'], 'ư, ơ, ngờ, ương'], ['ươc', ['ươ', 'c'], 'ư, ơ, cờ, ước'], ['gương', ['g', 'ương']], ['thước', ['th', 'ước'], 'thờ, ước, thước', ['ươc', 'ương']]],
    sort: {
      keys: ['ương', 'ươc'],
      items: [['b91-luoc', 'lược', 'ươc'], ['b91-thuoc-duoc', 'thược dược', 'ươc'], ['b91-suong', 'giọt sương', 'ương'], ['b91-giuong', 'giường', 'ương'], ['b91-ruoc-den', 'rước đèn', 'ươc'], ['b91-san-truong', 'sân trường', 'ương']],
    },
    read: {
      title: 'Hạt giống nhỏ', img: 'b91-doc', text: 'Một hạt giống nhỏ nằm lặng lẽ bên đường. Bé nhặt được, đem về thả xuống góc vườn. Chỉ ít hôm, mầm non đã vươn lên, uống những giọt sương sớm. Lá non khẽ rung rung. Dường như lá muốn cảm ơn bé.',
      q: [['Mầm non …', ['đã vươn lên.', 'khẽ rung rung.']], ['Lá non …', ['khẽ rung rung.', 'đã vươn lên.']]],
    },
    trace: ['ương', 'gương', 'ươc', 'thước'],
  }),
  L({
    n: 92, t: 'Ông lão và sếu nhỏ', p: 164,
    story: [
      ['b92-t1', 'Điều gì xảy ra khi ông lão đi vào rừng?', 'Một hôm, ông lão đi vào rừng. Ông thấy một chú sếu nhỏ bị thương nằm bên bờ suối.'],
      ['b92-t2', 'Khi thấy ông lão, mấy con sếu như thế nào?', 'Sếu bố, sếu mẹ bay vòng quanh, kêu lên lo lắng. Chúng sợ ông lão làm hại sếu con.'],
      ['b92-t3', 'Ông lão làm gì để giúp sếu nhỏ? Sếu bố, sếu mẹ làm gì?', 'Ông lão đem sếu nhỏ về nhà, băng bó vết thương. Sếu bố, sếu mẹ ngày ngày bay đến thăm con.'],
      ['b92-t4', 'Khi vết thương của sếu nhỏ đã lành, ông lão làm gì?', 'Khi vết thương đã lành, ông lão thả sếu nhỏ về với bố mẹ.'],
      ['b92-t5', 'Gia đình sếu đã làm gì để cảm ơn ông lão?', 'Gia đình sếu bay đến, mang theo hạt giống quý tặng ông lão để cảm ơn.'],
      ['b92-t6', 'Ông lão ước điều gì? Điều gì đã xảy ra?', 'Ông lão ước có một cánh đồng xanh tốt. Hạt giống nảy mầm, cánh đồng trước nhà ông xanh mướt.'],
    ],
    q: [['Ông lão làm gì để giúp sếu nhỏ?', ['Băng bó vết thương cho sếu', 'Nhốt sếu vào lồng', 'Đuổi sếu đi']]],
  }),
  L({
    n: 93, t: 'Ôn tập', p: 165, short: 'Ôn tập',
    read: {
      title: 'Ông bà em', img: 'b93-doc', text: 'Ông bà em rất thương em. Sáng sáng, ông đưa em đến trường. Hết giờ học, ông đón em về. Khi em về đến nhà, bà pha nước để ông bà và em cùng uống. Em uống nước và kể cho ông bà nghe về các bạn ở trường.',
      q: [['Ông …', ['đưa em đến trường, đón em về.', 'pha nước để ông bà và em cùng uống.', 'kể cho ông bà nghe về các bạn.']], ['Bà …', ['pha nước để ông bà và em cùng uống.', 'đưa em đến trường, đón em về.', 'kể cho ông bà nghe về các bạn.']], ['Em …', ['kể cho ông bà nghe về các bạn.', 'pha nước để ông bà và em cùng uống.', 'đưa em đến trường, đón em về.']]],
    },
    trace: ['Ông đưa em', 'đến trường'],
  }),
  L({
    id: 'tv-ck1', n: 93, num: '★', t: 'Ôn tập cuối học kì I', short: 'Ôn cuối kì',
    title: 'Ôn tập cuối học kì I', sayTitle: 'Ôn tập cuối học kì một', p: 166,
    sort: {
      name: 'Đố em: Mỗi toa tàu chở gì?', keys: ['uôc', 'ương', 'uôt', 'ươp', 'ưng'],
      items: [['ck1-thuoc', 'thuốc', 'uôc'], ['ck1-dua-chuot', 'dưa chuột', 'uôt'], ['ck1-duong', 'đường', 'ương'], ['ck1-muop', 'mướp', 'ươp'], ['ck1-trung', 'trứng', 'ưng'], ['ck1-ca-uop', 'cá ướp', 'ươp']],
    },
    read: {
      title: 'Chú bé trên cung trăng', img: 'ck1-doc', text: 'Những đêm trăng, bà thường chỉ cho Bi ba bóng đen mờ trên Mặt Trăng. Trông chúng giống một gốc đa, một con nghé và một chú bé. Bà kể: Xưa kia chú bé ở trần gian. Một cơn gió đã cuốn chú cùng gốc đa và nghé lên cung trăng. Trên đó, chú rất buồn vì nhớ nhà. Nhưng mặt đất quá xa. Chú bé không về được nữa.',
    },
    choose: [SQ([['nghé', 'ngé'], ['nghe', 'nge'], ['ngỗng', 'nghỗng']], 'Em chọn chữ nào: ng hay ngh?')],
    trace: ['Chú bé', 'nhớ nhà'],
  }),
];
