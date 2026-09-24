---
title: 하늘소 사람들
icon: fas fa-user-friends
order: 4
---

기수별 하늘소 사람들입니다. 동아리 주소록과 2006년 9월 하늘소 홈페이지의 [하늘소사람들](https://web.archive.org/web/20060924041131/http://hanulso.knu.ac.kr/people/people.php) 명단을 합쳐 기수, 이름, 학번만 옮겼습니다.

> 빠진 분, 잘못 적힌 이름이나 학번, 빼고 싶은 내용이 있으면 [커뮤니티]({{ '/community/' | relative_url }})로 알려 주세요. 홈페이지 주소는 2006년 명단에 있던 것이라 대부분 닫혔습니다. 그래서 인터넷 아카이브에 남은 사본으로 연결합니다.
{: .prompt-info }

{% assign total = 0 %}
{% for g in site.data.people %}{% assign total = total | plus: g.members.size %}{% endfor %}
지금 {{ site.data.people.size }}개 기수, {{ total }}명이 있습니다.

## 역대 회장

| 연도 | 회장 | 출처 |
|---|---|---|
| 2004년 | 16기 이안석 | 주소록 |
| 2005년 | 18기 김준호 | 주소록 |
| 2006년 | 19기 한승욱 | 주소록, 2006년 3월 홈페이지 |
| 2007년 | 18기 조용호 | 2007년 4월 홈페이지 |
| 2011년 | 24기 윤승용 | 주소록 |

2006년 9월에 캡처된 홈페이지에는 회장이 16기 차정현으로 적혀 있어 주소록과 다릅니다. 아래 「옛 홈페이지의 간부 기록」을 보세요. 다른 해의 회장을 기억하시면 알려 주세요.

## 기수별 명단

{% for g in site.data.people %}
<h3 id="gen-{{ g.gen | slugify }}">{{ g.gen }}기</h3>
{% if g.note %}<p class="text-muted">{{ g.note }}</p>{% endif %}
{% if g.members.size == 0 %}
<p class="text-muted">명단에 올라온 분이 없습니다.</p>
{% else %}
{% assign has_hp = false %}
{% for p in g.members %}{% if p.link or p.homepage %}{% assign has_hp = true %}{% endif %}{% endfor %}
<div class="table-wrapper"><table>
<thead><tr><th>이름</th><th>학번</th>{% if has_hp %}<th>홈페이지</th>{% endif %}</tr></thead>
<tbody>
{% for p in g.members %}
<tr>
<td>{{ p.name }}</td>
<td>{{ p.hakbun }}</td>
{% if has_hp %}<td>{% if p.link %}<a href="{{ p.link }}">{{ p.link | remove: 'https://' | remove: 'http://' }}</a>{% elsif p.homepage %}<a href="https://web.archive.org/web/2006/{{ p.homepage }}">{{ p.homepage | remove: 'http://' }}</a>{% endif %}</td>{% endif %}
</tr>
{% endfor %}
</tbody>
</table></div>
{% endif %}
{% endfor %}

## 옛 홈페이지의 간부 기록

옛 홈페이지 옆 칸에 있던 「간부」 기록입니다. 캡처된 날짜의 것만 남아 있습니다.

| 캡처 날짜 | 회장 | 부회장 | 서기 |
|---|---|---|---|
| 2006년 3월 | 19기 한승욱 | 19기 오한빈 | 19기 김새롬 |
| 2006년 9월 | 16기 차정현 | 19기 오한빈 | 20기 서정인 |
| 2007년 4월 | 18기 조용호 | 17기 김창곤 | 20기 서정인 |

지도교수는 세 기록 모두 강순주 교수(Real-Time System Lab)입니다.
