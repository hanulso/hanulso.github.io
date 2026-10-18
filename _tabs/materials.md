---
title: 자료
icon: fas fa-book-open
order: 6
---

동아리에 남아 있는 옛 자료를 모았습니다. 빠진 자료나 갖고 계신 옛 책자, 사진이 있으면 [GitHub 이슈](https://github.com/hanulso/hanulso.github.io/issues)로 알려 주세요.

## 옛 책자

하늘소가 1997년에 직접 만든 작품전시회 책자와, 하늘소 작품이 실린 학부 작품전(SEEK SQUARE), 모바일-디스플레이 NURI 엑스포 책자입니다. 2009년 8월에 책자를 사진으로 찍어 둔 것을 반듯하게 펴서 쪽마다 잘라 냈습니다. 1997년 책자는 거의 모든 쪽이 남아 있고, 다른 책자는 표지와 하늘소 작품이 실린 쪽만 찍혀 있습니다. 책자 속 작품은 [작품](/works/)에, 행사는 [연혁](/history/)에 정리했습니다.

책장 귀퉁이를 끌거나 누르면 넘어가고, 키보드 왼쪽, 오른쪽 화살표로도 넘길 수 있습니다. 글씨가 작으면 아래 「크게 보기」로 한 쪽씩 열어 보세요. 개인 연락처(전화번호, 이메일)는 가렸습니다.
{: .prompt-info }

<!-- 표지는 배경 그림으로 둔다. 테마가 본문의 <img>를 모두 확대 보기 링크로 감싸서 단추 안에 링크가 생기기 때문이다 -->
<div id="booklets" class="booklets" markdown="0">
  <div class="booklet-picks" role="group" aria-label="책자 고르기">
  {%- for b in site.data.booklets %}
    <button type="button" class="booklet-pick" data-id="{{ b.id }}" aria-pressed="false">
      <span class="booklet-pick-cover" style="background-image: url('/assets/img/booklets/{{ b.id }}/thumb.jpg')"></span>
      <span class="booklet-pick-year">{{ b.year }}</span>
      <span class="booklet-pick-name">{{ b.short }}</span>
    </button>
  {%- endfor %}
  </div>
  <div class="booklet-viewer">
    <h3 class="booklet-title">{{ site.data.booklets[0].title }}</h3>
    <p class="booklet-desc">{{ site.data.booklets[0].desc }}</p>
    <div class="booklet-stage"></div>
    <div class="booklet-nav">
      <button type="button" class="booklet-prev" aria-label="앞 쪽으로">&#9664; 앞</button>
      <span class="booklet-status" aria-live="polite"></span>
      <button type="button" class="booklet-next" aria-label="다음 쪽으로">뒤 &#9654;</button>
    </div>
    <div class="booklet-zoom"></div>
  </div>
  <noscript>
    <ul>
    {%- for b in site.data.booklets %}
      <li>{{ b.title }}: {% for p in b.pages %}<a href="/assets/img/booklets/{{ b.id }}/{{ p.file }}">{{ p.label }}</a>{% unless forloop.last %}, {% endunless %}{% endfor %}</li>
    {%- endfor %}
    </ul>
  </noscript>
</div>

<script id="booklet-data" type="application/json">{{ site.data.booklets | jsonify }}</script>
<script src="/assets/js/vendor/page-flip-2.0.7.browser.js"></script>
<script src="/assets/js/booklets.js"></script>

책장 넘김은 [StPageFlip](https://github.com/Nodlik/StPageFlip)(MIT 라이선스)을 썼습니다.

## 다른 자료

- [하늘 2.3](/assets/files/hanul-2.3.lzh): MS-DOS용 그림 프로그램 「하늘」의 2.3판 배포본(LZH 압축 270KB). 옛 홈페이지에서 내려받던 파일 그대로입니다. 설명은 [작품](/works/)에 있습니다.
- [언론 기록](/press/): 신문과 인터넷 기사에 나온 하늘소.
