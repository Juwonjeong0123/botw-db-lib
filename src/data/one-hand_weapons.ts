import { Weapon } from "../models/Weapon";

export const one_hand_weapons: Weapon[] =
[
    {
        name: "녹슨 검",
        description: `먼 옛날, 이름 있는 검사가 사용했을 것으로 추정되는 녹슨 한손검. 어떻게든 쓸 순 있지만 금방 망가져 버린다.`,
        Attack: 6,
        durability: 8,
        type: "oneHand"
    },
    {
        name: "여행자의 검",
        description: `주로 위험한 야생 동물에 대한 방비용으로 하이랄 전역에서 사용되는 검. 쉽게 망가지진 않지만 몬스터를 상대하기엔 조금 불안하다.`,
        Attack: 5,
        durability: 20,
        type: "oneHand"
    },
    {
        name: "병사의 검",
        description: `과거 하이랄 성을 지키던 병사가 쓰던 검. 몬스터도 상대할 수 있을 만큼 날카롭다. 금속 검신은 내구력 또한 뛰어나다.`,
        Attack: 14,
        durability: 23,
        type: "oneHand"
    },
    {
        name: "기사의 검",
        description: `하이랄 성의 기사들이 쓰던 검. 다루기가 편하고 공격력이 높아 현재는 여행에 익숙한 모험가들이 선호한다.`,
        Attack: 26,
        durability: 27,
        type: "oneHand"
    },
    {
        name: "왕가의 검",
        description: `눈부신 공적을 세운 기사에게 하이랄 왕가에서 하사한 검. 최상급의 공격력과 아름다움 모두를 겸비한 명품.`,
        Attack: 36,
        durability: 36,
        type: "oneHand"
    },
    {
        name: "근위의 검",
        description: `대재앙에 대항하기 위해 시커족이 만든 무기. 고대 기술을 활용해 퇴마의 검을 모방하여 만들었다. 뛰어난 공격력을 얻었지만 내구성에 문제가 남았다.`,
        Attack: 48,
        durability: 14,
        type: "oneHand"
    },
    {
        name: "가디언 나이프",
        description: `소형 가디언이 장비하는 검. 고대 기술이 사용된 푸른 검신을 지녔다. 내구성은 별로 좋지 않다.`,
        Attack: 20,
        durability: 17,
        type: "oneHand"
    },
    {
        name: "가디언 나이프+",
        description: `보다 위력이 강화된 가디언 나이프. 높은 절단력이 한층 강화되었으며 내구성도 약간 개선됐다.`,
        Attack: 30,
        durability: 25,
        type: "oneHand"
    },
    {
        name: "가디언 나이프++",
        description: `최대치까지 위력이 강화된 가디언 나이프. 두꺼운 갑옷조차 가르는 공격력을 갖추었다. 위력에 맞춰 검신도 커졌다.`,
        Attack: 40,
        durability: 32,
        type: "oneHand"
    },
    {
        name: "고대 병기·검",
        description: `잃어버린 고대 기술을 날에 담은 한손검. 푸르게 빛나는 날은 발도했을 때만 볼 수 있다. 절단력은 일반적인 금속 검을 월등히 능가한다.`,
        Attack: 40,
        durability: 54,
        type: "oneHand"
    },
    {
        name: "빙설의 검",
        description: `헤브라 지방 극한의 봉우리에서 제련했다는 마법 검. 검신에 푸른 빛이 가득 찼을 때 냉기를 뿜는 날이 상대를 얼어붙게 만든다.`,
        Attack: 20,
        durability: 30,
        type: "oneHand"
    },
    {
        name: "뇌전의 검",
        description: `하이랄 구릉의 낙뢰에 오랜 시간 노출시켜 제련한 마법 검. 금색 빛이 검신에 가득 찼을 때 휘두르면 전격으로 상대를 감전시킬 수 있다.`,
        Attack: 22,
        durability: 36,
        type: "oneHand"
    },
    {
        name: "화염의 검",
        description: `데스마운틴의 용암으로 제련했다는 마법 검. 검신이 붉은 빛으로 가득 찼을 때 휘두르면 작열의 불꽃을 내뿜는다.`,
        Attack: 24,
        durability: 36,
        type: "oneHand"
    },
    {
        name: "라이넬의 검",
        description: `라이넬이 쓰는 금속 검. 벤다기보단 뭉갤 목적으로 만들어졌다. 인간이 다루기엔 상당히 무겁지만 공격력은 높다.`,
        Attack: 24,
        durability: 26,
        type: "oneHand"
    },
    {
        name: "야수왕의 검",
        description: `날이 늘어 공격력이 향상된 라이넬의 검. 스치듯 휘두르기만 해도 적을 양단할 수 있다고 한다.`,
        Attack: 36,
        durability: 32,
        type: "oneHand"
    },
    {
        name: "야수신의 검",
        description: `하얀 갈기의 라이넬이 든 흉악한 검. 거칠고 두꺼운 날은 그 아무리 막강한 적이라도 가뿐히 찍어 낼 공격력을 지녔다.`,
        Attack: 58,
        durability: 41,
        type: "oneHand"
    },
    {
        name: "날개깃의 검",
        description: `리토족이 쓰는 양날 검. 공중에서도 재빨리 움직이기 위해 무게를 줄일 수 있도록 고안되었다.`,
        Attack: 15,
        durability: 27,
        type: "oneHand"
    },
    {
        name: "조라의 검",
        description: `가는 검신과 조라족 특유의 장식이 특징인 검. 특수한 금속으로 만들어져 내구성이 높다. 물에 젖어도 녹슬지 않는다.`,
        Attack: 15,
        durability: 27,
        type: "oneHand"
    },
    {
        name: "겔드의 나이프",
        description: `겔드 지방에서 사용되는 가장 일반적인 검. 짧고 굽은 날이 특징이며 호신용으로 지니는 겔드족 여성도 많다.`,
        Attack: 16,
        durability: 23,
        type: "oneHand"
    },
    {
        name: "월광의 나이프",
        description: `섬세한 조각이 새겨진 검. 아름다운 곡선의 날은 굉장히 날카롭다. 과거엔 제사에도 사용되었다고 전해진다.`,
        Attack: 25,
        durability: 32,
        type: "oneHand"
    },
    {
        name: "잔심의 단도",
        description: `시커족의 전통적인 외날검. 유례를 볼 수 없는 좁은 검신과 날카로움을 지녀 검 제작에 고대 기술이 사용되었다는 말도 있다.`,
        Attack: 15,
        durability: 26,
        type: "oneHand"
    },
    {
        name: "참수도",
        description: `이가단이 쓰는 한손검. 반달 모양의 날은 참수를 위한 모양이라 하며, 그들의 무서움을 상징하고 있다. 내구성은 낮은 편이다.`,
        Attack: 16,
        durability: 14,
        type: "oneHand"
    },
    {
        name: "귀원도",
        description: `이가단에 의해 만들어진 흉기. 표적의 숨통을 확실히 끊어놓기 위해 살상에 특화된 형태는 보는 이를 공포에 떨게 한다.`,
        Attack: 40,
        durability: 25,
        type: "oneHand"
    },
    {
        name: "숲에 사는 자의 검",
        description: `코로그족이 인간을 위해 제작했다고 전해지며 목제로 만들어져 주로 호신용으로 사용되는 검. 숲의 담쟁이덩굴이나 뿌리를 벨 때도 사용된다.`,
        Attack: 22,
        durability: 27,
        type: "oneHand"
    },
    {
        name: "칠보의 나이프",
        description: `영걸 우르보사가 애용했던 굴지의 명검. 우르보사가 이 검을 휘두르는 모습은 마치 화려한 검무와 같았다고 전해진다.`,
        Attack: 32,
        durability: 60,
        type: "oneHand"
    },
    {
        name: "소드",
        description: `고대의 용사가 사용했다는 검. 손에 들면 이상하게 그리운 기분이 든다.`,
        Attack: 22,
        durability: 27,
        type: "oneHand"
    },
    {
        name: "여신의 백도검",
        description: `하늘에서 나타난 용사가 손에 넣었다고 전해지는 검. 검신엔 여신의 불꽃이 깃들어 있다고 한다. 장비하면 신기하게도 하늘의 바람을 느낄 수 있다.`,
        Attack: 28,
        durability: 45,
        type: "oneHand"
    },
    {
        name: "마스터 소드",
        description: `전설로 전해지는 퇴마의 검. 빛나는 검신에는 재앙에 대항할 수 있는 신성한 힘이 깃들어 있다. 검에게 선택받은 용사만이 손에 넣을 수 있다.`,
        Attack: 30,
        durability: 40,
        type: "oneHand"
    },
    {
        name: "일격의 검",
        description: `일격 필살이지만 사용자도 일격에 목숨을 잃는 검. 2번 쓰면 검이 빛을 잃어 일격에 해치울 수 없지만 잠시 시간이 지나면 다시 빛을 되찾는다.`,
        Attack: '∞',
        durability: '-',
        type: "oneHand"
    },
    {
        name: "나뭇가지",
        description: `어디서든 볼 수 있는 나뭇가지지만 휘두르기에 딱 좋은 절묘한 밸런스. 장비하면 무기로서 사용할 수 있다.`,
        Attack: 2,
        durability: 4,
        type: "oneHand"
    },
    {
        name: "횃불",
        description: `불을 붙이면 계속해서 타오르는 횃불. 집어 넣으면 불이 꺼지므로 다시 한 번 붙여야 한다.`,
        Attack: 2,
        durability: 8,
        type: "oneHand"
    },
    {
        name: "보코블린의 뼈",
        description: `잘려 나가도 계속 움직이는 섬뜩한 팔의 뼈. 별로 주머니에 넣어 두고 싶지 않다. 오래돼 약화된 상태라 금방 망가진다.`,
        Attack: 5,
        durability: 5,
        type: "oneHand"
    },
    {
        name: "보코곤봉",
        description: `보코블린이 먹잇감을 사냥하는 것 그 하나만을 위해 만들어 낸 곤봉. 조금만 무리해도 금방 망가져 버린다.`,
        Attack: 4,
        durability: 12,
        type: "oneHand"
    },
    {
        name: "가시 보코곤봉",
        description: `엄선한 소재로 제작된 특별한 보코블린의 곤봉. 뾰족한 뼈에 찔리면 상당히 아프다.`,
        Attack: 12,
        durability: 14,
        type: "oneHand"
    },
    {
        name: "용골 보코곤봉",
        description: `곤봉에 화석의 뼈를 조합한 강력한 무기. 보코블린 중에서도 특히 힘이 센 개체만이 가지고 있다.`,
        Attack: 24,
        durability: 18,
        type: "oneHand"
    },
    {
        name: "나무 국자",
        description: `수프를 뜨거나 재료를 볶을 때 쓰는 요리 도구. 단단한 나무를 깎아 만들었기 때문에 이걸로 맞으면 꽤나 아프다.`,
        Attack: 4,
        durability: 5,
        type: "oneHand"
    },
    {
        name: "뿅 망치",
        description: `킬튼이 만든 기묘한 망치. 맞아도 별로 아프진 않지만 탄성으로 인해 뿅~ 하고 날아간다.`,
        Attack: 1,
        durability: 80,
        type: "oneHand"
    },
    {
        name: "부메랑",
        description: `원래는 숲의 민족 코로그의 무기. 독특한 모양은 던져도 다시 되돌아오도록 고안되었다.`,
        Attack: 8,
        durability: 18,
        type: "oneHand"
    },
    {
        name: "리잘포스의 뼈",
        description: `죽어도 계속 움직이는 스탈 리잘포스의 뼈. 휘두르면 무기로 쓸 수 있으나 쉽게 망가진다. 등에 메고 있을 때 움직여서 신경 쓰인다...`,
        Attack: 12,
        durability: 8,
        type: "oneHand"
    },
    {
        name: "리잘부메랑",
        description: `리잘포스가 선호하는 굽은 검. 직접 베는 것뿐만 아니라 부메랑처럼 던질 수도 있다.`,
        Attack: 14,
        durability: 17,
        type: "oneHand"
    },
    {
        name: "강화 리잘부메랑",
        description: `블루 리잘포스가 선호하는 검. 날이 2장이라 평범한 리잘부메랑보다 베어 내는 힘이 강하며 던져도 다시 돌아온다.`,
        Attack: 24,
        durability: 23,
        type: "oneHand"
    },
    {
        name: "삼지 리잘부메랑",
        description: `날의 수가 더 늘어나 공격력이 높아진 검. 부메랑으로도 쓸 수 있지만 다루기 어려워 전투에 뛰어난 블랙 리잘포스가 주로 갖고 다닌다.`,
        Attack: 36,
        durability: 27,
        type: "oneHand"
    },
    {
        name: "해풍의 부메랑",
        description: `넓은 바다를 여행했던 용사가 애용했다고 전해지는 부메랑. 희미하게 바다 냄새가 난다.`,
        Attack: 20,
        durability: 20,
        type: "oneHand"
    },
    {
        name: "파이어 로드",
        description: `고대 마법사가 만들었다고 전해지는 불덩이를 만들어 내는 마법 지팡이. 직접 타격하면 금방 망가져 버리니 주의.`,
        Attack: 5,
        durability: 14,
        type: "oneHand"
    },
    {
        name: "메테오 로드",
        description: `고대 마법사가 금지된 주술로 만들었다고 전해지는 세 개의 화염구를 동시에 만들어 내는 지팡이. 봉인된 불의 힘이 다하면 망가져 버린다.`,
        Attack: 10,
        durability: 32,
        type: "oneHand"
    },
    {
        name: "아이스 로드",
        description: `헤브라 산맥의 얼음을 정제하여 만들어졌다는 냉기를 만들어 내는 마법 지팡이. 직접 공격엔 적합하지 않다.`,
        Attack: 5,
        durability: 14,
        type: "oneHand"
    },
    {
        name: "프리즈 로드",
        description: `헤브라 산 정상의 얼음을 정제하여 만들어졌다는 초저온의 냉기를 광범위로 발사하는 마법 지팡이. 봉인된 냉기가 다하면 산산조각이 난다.`,
        Attack: 10,
        durability: 32,
        type: "oneHand"
    },
    {
        name: "일렉트로 로드",
        description: `하이랄 구릉의 낙뢰를 보주에 가두었다고 전해지는 마법 지팡이. 전기로 된 구슬을 쏠 수 있다. 타격 공격엔 적합하지 않다.`,
        Attack: 5,
        durability: 14,
        type: "oneHand"
    },
    {
        name: "볼티지 로드",
        description: `하이랄 구릉의 강렬한 낙뢰를 보주에 가두었다고 전해지는 마법 지팡이. 전기로 된 구슬을 3면으로 쓸 수 있다. 봉인된 힘이 다하면 망가져 버린다.`,
        Attack: 10,
        durability: 32,
        type: "oneHand"
    }
]